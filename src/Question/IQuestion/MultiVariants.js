import isEqual from 'lodash.isequal';

import {questionTemplate, validateErrorText} from '../templates';
import {validateSimpleText, validateTextInBlank} from '../checkStringValid';
import IQuestion from './IQuestion';

export default class MultiVariantsQuestion extends IQuestion{

  questionTemplate =  (...args) => {
    return questionTemplate(...args);
  }

  getAnswer(){
    const selected = Array.from(this.mainElement.querySelectorAll(`input[name="${this.questionData.questionText}"]:checked`));
    if(selected.length){
      return selected.map((elem)=> elem.value);
    }
    return [];
  }

  certainCheck = (userAnswers) => {
    const { rightAnswers } = this.questionData;
    return isEqual(rightAnswers.sort(), userAnswers.sort());
  }

}