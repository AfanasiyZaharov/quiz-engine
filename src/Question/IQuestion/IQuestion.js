import uid from '../../_utils/uid';
import { validateErrorText } from '../templates';

export default class IQuestion {
  constructor(questionData, parentElem, checkCallback, testMode=false) {
    this.questionData = questionData;
    this.parentElem = parentElem;
    this.id = uid();
    this.resultCorrect = false;
    this.checkInitialized = false;
    this.firstTimeCorrect = false;
    this.input = null;
    this.checkCallback = checkCallback;
    this.testMode = testMode
  }

  hide = () => {
    this.mainElement.style.display = "none";
  }

  check = (shouldCallBack = true) => {
    const answer = this.getAnswer();
    const result = this.certainCheck(answer);
    if (!this.checkInitialized) {
      this.checkInitialized = true;
      this.firstTimeCorrect = result;
      this.hintButton.style.display = 'block';
    }
    this.resultCorrect = result;
    this.renderResult(result);
    if (shouldCallBack) {
      this.checkCallback(result);
    }
  }

  renderResult = (isCorrect) => {
    if (isCorrect) {

      this.mainElement.classList.remove('incorrect');
      this.mainElement.classList.add('correct');
    } else {
      this.mainElement.classList.remove('correct');
      this.mainElement.classList.add('incorrect');
    }

  }

  renderQuestion() {
    const html = this.questionTemplate(this.questionData, this.id);
    this.parentElem.insertAdjacentHTML('beforeend', html);
    const mainElement = this.parentElem.querySelector(`#${this.id}`);
    this.mainElement = mainElement;
    this.input = this.mainElement.querySelector('input');
    this.hintButton = this.mainElement.querySelector('.hint-sign');
    this.hintButton.style.display = 'none';
    this.hintContainer = this.mainElement.querySelector('.hint-container');
    this.checkSignContainer = this.mainElement.querySelector('.check-sign');
    console.log('testMode', this.testMode)
    if(this.testMode){
      this.hintButton.style.display='none';
      this.checkSignContainer.style.display='none';
    }
    this.baseAddListeners();
  }

  showHints = () => {
    if(this.testMode){
      return false
    }
    if (!this.errorsContainer) {
      const { rightAnswers } = this.questionData;
      const html = validateErrorText(rightAnswers);
      this.hintContainer.insertAdjacentHTML('beforeend', html);
      this.errorsContainer = this.hintContainer.querySelector('.hints-answers-container');
    }
    this.hintContainer.style.display = 'block';
    this.hintContainer.addEventListener('click', this.closeHints);
    setTimeout(() => {
      this.closeHints();
    }, 2500);
  }

  closeHints = () => {
    this.hintContainer.style.display = 'none';
  }

  baseAddListeners = () => {
    if(this.testMode){
      return;
    }
    const inputs = this.mainElement.querySelectorAll('input');
    if (inputs.length === 1) {
      this.mainElement.querySelector('input').addEventListener('keydown', (e) => { if(e.code === "Enter") {this.check();} });
    }
    this.mainElement.querySelector('.check-sign').addEventListener('click', this.check);
    this.hintButton.addEventListener('click', this.showHints);
  }

}