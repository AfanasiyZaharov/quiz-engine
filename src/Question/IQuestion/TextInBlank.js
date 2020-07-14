import {questionTemplate, validateErrorText} from '../templates';
import {validateSimpleText, validateTextInBlank} from '../checkStringValid';
import IQuestion from './IQuestion';

export default class TextInBlankQuestion extends IQuestion{
  questionTemplate =  (...args) => {
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
    const userValue = el.target.value;
    this.userValue = userValue;
    this.check(userValue);
  }

}