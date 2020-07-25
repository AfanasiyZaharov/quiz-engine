import {questionTemplate, validateErrorText} from '../templates';
import {validateSimpleText, validateTextInBlank, compareTwo} from '../checkStringValid';
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

  certainCheck = (userAnswer) => {
    const { rightAnswers } = this.questionData;
    return compareTwo(rightAnswers[0], userAnswer);
  }

}