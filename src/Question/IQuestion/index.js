import {questionTemplate, validateErrorText} from '../templates';
import {validateSimpleText, validateTextInBlank} from '../checkStringValid';
import uid from '../../_utils/uid';
import SimpleText from './SimpleText';
import TextInBlank from './TextInBlank';


class IQuestion{
  constructor(questionData, parentElem){
    this.questionData = questionData;
    this.parentElem = parentElem;
    this.id = uid();
    this.resultCorrect = false;
    this.checkInitialized = false;
    this.firstTimeCorrect = false;
    this.input = null;
  }

  hide = () =>{
    this.mainElement.style.display = "none";
  }

  check = () =>{
    const answer = this.getAnswer();
    const result = this.certainCheck(answer);
    if(!this.checkInitialized){
      this.checkInitialized = true;
      this.firstTimeCorrect = result;
    }
    this.resultCorrect = result;
    this.renderResult(result);
    console.log('resu', result);
  }

  renderResult = (isCorrect) =>{
    console.log('isCOrrent',isCorrect);
    if(isCorrect){

      this.mainElement.classList.remove('incorrect');
      this.mainElement.classList.add('correct');
    }else{
      this.mainElement.classList.remove('correct');
      this.mainElement.classList.add('incorrect');
    }

  }

  renderQuestion(){
    const html = this.questionTemplate(this.questionData, this.id);
    this.parentElem.insertAdjacentHTML('beforeend', html);
    console.log('html', html);

    console.log('this.parentElem.lastChild', this.parentElem.querySelector(`#${this.id}`));
    const mainElement = this.parentElem.querySelector(`#${this.id}`);
    this.mainElement = mainElement;
    this.input = this.mainElement.querySelector('input');
    this.baseAddListeners();
  }


  baseAddListeners = () =>{
    // this.mainElement.querySelector('input').addEventListener('change', this.changeHandler);
    this.mainElement.querySelector('.check-sign').addEventListener('click', this.check);

  }
  
}


export class TextBeforeQuestion{
  constructor(text, parentElem){
    this.text = text;
    this.parentElem = parentElem;
    this.checkResult = true;
  }

  hide = () =>{
    this.mainElement.style.display = "none";
  }

  check = () =>{
    
  }

  renderQuestion = () =>{
    const sectionHeaderText = `<div class="question section-header">${this.sections[this.currentSection].header}</div>`;
    this.parentElem.insertAdjacentHTML('beforeend', sectionHeaderText);
  }
}

class SimpleTextQuestion extends IQuestion{
  // constructor(questionData, parentElem){
  //   super()
  // }
  questionTemplate =  (...args) => {
    console.log('args', args);
    return questionTemplate(...args);
  }

  getAnswer(){
    return this.input.value;
  }

  certainCheck = (userAnswer) =>{  
    const { rightAnswers } = this.questionData;
    return validateSimpleText(userAnswer, rightAnswers);
  }

  check = (userAnswer) => {
    return validateSimpleText(userAnswer, rightAnswers);
  }

  changeHandler  = (el) =>{
    console.log('change', el.target.value);
    const userValue = el.target.value;
    this.userValue = userValue;
    this.check(userValue);
  }

} 

class TextInBlankQuestion extends IQuestion{
  
  questionTemplate =  (...args) => {
    console.log('args', args);
    return questionTemplate(...args);
  }

  getAnswer(){
    return this.input.value;
  }

  certainCheck = (userAnswer) => {
    const { rightAnswers, questionText } = this.questionData;
    return validateTextInBlank(userAnswer, rightAnswers, questionText);
  }

  changeHandler  = (el) =>{
    console.log('change', el.target.value);
    const userValue = el.target.value;
    this.userValue = userValue;
    this.check(userValue);
  }

}

export const createQuestion = (questionData, parentElem) =>{
  switch(questionData.questionType){
    case 'simple-text':
      return new SimpleTextQuestion(questionData, parentElem);
    case 'text-in-blank':
      return new TextInBlankQuestion(questionData, parentElem);
      
  }
}