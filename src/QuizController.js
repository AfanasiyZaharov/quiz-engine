// import Question from './Question';
import {createQuestion, TextBeforeQuestion} from './Question/IQuestion';

class QuizController{

  questions = [];
  convertedQuestions = [];
  oldQuestions = [];

  constructor(sections=[], parentElement){
    this.sections = sections;
    this.maxSectionNumber = sections.length - 1;
    this.parentElement = parentElement;

    this.appendStyles();
    this.renderMainControls();
    this.changeSection(0);
  }

  initSection = (sectionNumber) =>{
    this.oldQuestions = [...this.oldQuestions, ...this.convertedQuestions];
    this.questions = this.sections[sectionNumber].questions;
    this.currentSection = sectionNumber;

    this.convertedQuestions = [new TextBeforeQuestion(this.sections[sectionNumber].header, this.questionsContainer), ...this.questions.map((question)=>{
      // return new Question(question, this.questionsContainer);
      return createQuestion(question, this.questionsContainer);
    })];
    this.renderQuiz();
  }

  changeSection = (sectionNumber) => {
    console.log('this.next seciton');
    if(this.maxSectionNumber === sectionNumber){
      this.isLastSection = true;
    }
    this.convertedQuestions.forEach((question)=>{
      question.hide();
    });
    // this.parentElement.querySelector('.section-header') ? this.parentElement.querySelector('.section-header').style.display = 'none' : null;
    let section = this.parentElement.querySelector('.section-header');
    if(section){
      this.questionsContainer.removeChild(section);
    }
    this.initSection(sectionNumber);
  }

  // inject styles to page
  appendStyles = () => {
    const scss = require('./styles/index.scss');
    const head = document.getElementsByTagName('head')[0];

    const styleElem = document.createElement('style');
    styleElem.innerHTML = scss;

    head.appendChild(styleElem);
  }
  

  findAllFalse = () =>{
    return this.convertedQuestions.filter((ques)=> !ques.checkResult);
  }

  checkCorrect = () =>{
    for(let i = 0; i < this.convertedQuestions.length; i++){
      this.convertedQuestions[i].check();
    }
  }
  
  questionCallback = (isChangedQuestionCorrect) => {
    if(isChangedQuestionCorrect){
      this.findAllFalse();
    }
  }

  renderMainControls = () =>{
    console.log('dsa', this.parentElement);

    const html = `
    <div class = "questions-list"> </div>
    <div class="button-container">
      <button class="button" id="check_button">Check Answers</button>
      <button class="button" id="next-section">Next Section</button> 

    </div>
    `
    this.parentElement.insertAdjacentHTML('beforeend', html);

    this.checkButton = document.querySelector('#check_button');
    this.nextButton = document.querySelector('#next-section');
    this.nextButton.style.display = 'none';

    this.checkButton.addEventListener('click', this.checkCorrect);
    // this.nextButton.addEventListener('click', ()=>{this.changeSection(this.currentSection + 1);});

    this.questionsContainer = this.parentElement.querySelector('.questions-list');
  }

  renderNextSectionButton = () =>{
    if(!this.isLastSection){
      this.nextButton.style.display = 'block';
    }else{
      this.renderCongrats();
    }

  }

  renderCongrats = () =>{
    alert('grats!');
  }

  renderQuiz = () => {
    for(let i = 0; i<this.convertedQuestions.length; i++){
      this.convertedQuestions[i].renderQuestion();
    }
  }


}

export default QuizController;
