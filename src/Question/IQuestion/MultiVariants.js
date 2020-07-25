import isEqual from 'lodash.isequal';

import {questionTemplate, validateErrorText} from '../templates';
import {validateSimpleText, validateTextInBlank, checkMulti} from '../checkStringValid';
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

  changeListener = (e)=>{
    if(!this.inputs.includes(e.target)){
      this.check();
      window.document.removeEventListener('change', this.changeListener);
      window.document.removeEventListener('focusin', this.changeListener);
    }
  }

  addCertainListeners = () =>{
    this.inputs.forEach((input)=>{
      input.addEventListener('change', (e)=>{
        window.document.addEventListener('change', this.changeListener);
        window.document.addEventListener('focusin', this.changeListener);
      });
    })
  }

  hide = () =>{
    super.hide();
    window.document.removeEventListener('change', this.changeListener);
    window.document.removeEventListener('focusin', this.changeListener);
  }

  renderQuestion(){
    super.renderQuestion();
    this.inputs = Array.from(this.mainElement.querySelectorAll('input'));
    this.addCertainListeners();
  }

  certainCheck = (userAnswers) => {
    const { rightAnswers } = this.questionData;
    return checkMulti(userAnswers, rightAnswers);
  }

}