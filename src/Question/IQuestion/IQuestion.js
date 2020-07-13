
import uid from '../../_utils/uid';

export default class IQuestion{
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