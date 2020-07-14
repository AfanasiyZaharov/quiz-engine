import {questionTemplate, validateErrorText} from '../templates';
import {validateSimpleText, validateTextInBlank} from '../checkStringValid';
import IQuestion from './IQuestion';

export default class SimpleTextQuestion extends IQuestion{
  // constructor(questionData, parentElem){
  //   super()
  // }
  questionTemplate =  (...args) => {
    return questionTemplate(...args);
  }

  getAnswer(){
    return this.input.value;
  }

  certainCheck = (userAnswer) =>{  
    const { rightAnswers } = this.questionData;
    return validateSimpleText(userAnswer, rightAnswers);
  }

  changeHandler  = (el) =>{
    const userValue = el.target.value;
    this.userValue = userValue;
    this.check(userValue);
  }

} 