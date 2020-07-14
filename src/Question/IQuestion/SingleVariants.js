import {questionTemplate, validateErrorText} from '../templates';
import {validateSimpleText, validateTextInBlank} from '../checkStringValid';
import IQuestion from './IQuestion';

export default class SingleVariantQuestion extends IQuestion{

  questionTemplate =  (...args) => {
    return questionTemplate(...args);
  }

  getAnswer(){
    const selected = this.mainElement.querySelector(`input[name="${this.questionData.questionText}"]:checked`);
    if(selected){
      return selected.value;
    }
    return undefined;
  }

  certainCheck = (userAnswer) => {
    const { rightAnswers } = this.questionData;
    return rightAnswers[0] === userAnswer;
  }

}