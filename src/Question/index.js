import isEqual from 'lodash.isequal';

import uid from '../_utils/uid';
import {questionTemplate, validateErrorText} from './templates';
import {validateSimpleText, validateTextInBlank} from './checkStringValid';

class Question {
  constructor(questionData, parentElem){
    this.questionData = questionData;
    this.parentElem = parentElem;
    this.id = uid();
    this.resultCorrect = false;
  }

  //document.querySelector('input[name="I live in a very small village. You probably won’t find it __ your map."]:checked').value

  check = (value) => {
    console.log('toCheck', value);
    const { rightAnswers, questionType, questionText } = this.questionData;
    if(questionType === 'simple-text'){
      var result = validateSimpleText(value, rightAnswers);
      this.resultCorrect = result;
      console.log('resu', result);
    }
    if(questionType === 'text-in-blank'){
      var result = validateTextInBlank(value, rightAnswers, questionText);
      console.log('resu', result);
      this.resultCorrect = result;
    }

    if(questionType === 'variants-single'){
      this.resultCorrect = rightAnswers[0] === value;
      this.userValue = value;
    }

    if(questionType === 'variants-multi'){
      this.resultCorrect = isEqual(rightAnswers.sort(), value.sort());
      this.userValue = value;
    }
  }
  
  renderCheckResult = () => {
    if(this.questionData.questionType === 'variants-single' ){

      const selected = this.mainElement.querySelector(`input[name="${this.questionData.questionText}"]:checked`);
      if(selected){
        this.check(selected.value);
      }
    }

    if(this.questionData.questionType === 'variants-multi' ){
      const selected = Array.from(this.mainElement.querySelectorAll(`input[name="${this.questionData.questionText}"]:checked`));
      if(selected.length){
        this.check(selected.map((elem)=> elem.value));
      }
    }
    
    if(this.resultCorrect){
      this.mainElement.classList.add('correct');
      if(this.errorContainer){
        this.mainElement.querySelector('.answer').removeChild(this.errorContainer);
        this.errorContainer = null;
        this.mainElement.classList.remove('incorrect');
      }
    }else{
      this.mainElement.classList.add('incorrect');
      let errorText;
      if(!this.userValue || this.userValue === ''){
        errorText = 'Required';
      }else{
        errorText = validateErrorText(this.questionData.rightAnswers);
      }
      if(this.errorContainer){
        this.errorContainer.innerHTML = errorText;
      }else{
        this.mainElement.querySelector('.answer').insertAdjacentHTML('beforeend', `<div class="error-text">${errorText}</div`);
        this.errorContainer = this.mainElement.querySelector('.error-text');
      }
    }
  }


  hide = () =>{
    this.mainElement.style.display = "none";
  }

  changeHandler  = (el) =>{
    console.log('change', el.target.value);
    const userValue = el.target.value;
    this.userValue = userValue;
    this.check(userValue);
  }

  renderQuestion = () =>{
    const html = questionTemplate(this.questionData, this.id);
    this.parentElem.insertAdjacentHTML('beforeend', html);

    console.log('this.parentElem.lastChild', this.parentElem.querySelector(`#${this.id}`));
    const mainElement = this.parentElem.querySelector(`#${this.id}`);
    mainElement.querySelector('input').addEventListener('change', this.changeHandler);
    this.mainElement = mainElement;
  }
}

export default Question;