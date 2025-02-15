import { questionTemplate, validateErrorText } from '../templates';
import { validateMultiBlanks } from '../checkStringValid';
import IQuestion from './IQuestion';
import { Storage } from '../../_utils/Storage';

export default class MultipleTextInBlankQuestions extends IQuestion {
  questionTemplate = (...args) => {
    return questionTemplate(...args);
  }

  getAnswer() {
    return this.inputs.map((input) => input.value);
  }

  certainCheck = (userAnswer) => {
    const { rightAnswers, questionText } = this.questionData;
    const { correct, correctIndexes } = validateMultiBlanks(userAnswer, rightAnswers, questionText);
    this.correctIndexes = correctIndexes;
    return correct;
  }

  renderResult = (isCorrect) => {
    for (let i = 0; i < this.inputs.length; i++) {
      if (this.correctIndexes.includes(i)) {
        this.inputs[i].classList.remove('incorrect');
        this.inputs[i].classList.add('correct');
      } else {
        this.inputs[i].classList.remove('correct');
        this.inputs[i].classList.add('incorrect');
      }
    }
    if (isCorrect) {
      this.mainElement.classList.remove('incorrect');
      this.mainElement.classList.add('correct');
    } else {
      this.mainElement.classList.remove('correct');
      this.mainElement.classList.add('incorrect');
    }
  }

  changeListener = (e) => {
    console.log('thisin', this.inputs, e.target);

    if (!this.inputs.includes(e.target)) {
      this.check();
      window.document.removeEventListener('change', this.changeListener);
      window.document.removeEventListener('focusin', this.changeListener);
    }else{
      const answers = this.getAnswer();
      Storage.write(this.sectionIndex, this.questionIndex, answers);
    }
  }

  addCertainListeners = () => {
    this.inputs.forEach((input) => {
      input.addEventListener('change', (e) => {
        window.document.addEventListener('change', this.changeListener);
        window.document.addEventListener('focusin', this.changeListener);
      });
    })
  }

  hide = () => {
    super.hide();
    window.document.removeEventListener('change', this.changeListener);
    window.document.removeEventListener('focusin', this.changeListener);
  }

  renderQuestion() {
    super.renderQuestion();
    this.inputs = Array.from(this.mainElement.querySelectorAll('input'));
    this.addCertainListeners();
  }

  changeHandler = (el) => {
    const userValue = el.target.value;
    this.userValue = userValue;
    this.check(userValue);
  }

}