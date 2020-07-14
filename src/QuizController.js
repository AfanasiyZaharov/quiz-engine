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

    this.renderMainControls();
    this.changeSection(0);
  }

  initSection = (sectionNumber) =>{
    this.oldQuestions = [...this.oldQuestions, ...this.convertedQuestions];
    this.questions = this.sections[sectionNumber].questions;
    this.currentSection = sectionNumber;

    this.convertedQuestions = [new TextBeforeQuestion(this.sections[sectionNumber].header, this.questionsContainer), ...this.questions.map((question)=>{
      // return new Question(question, this.questionsContainer);
      return createQuestion(question, this.questionsContainer, this.questionCallback);
    })];
    this.renderQuiz();
  }

  changeSection = (sectionNumber) => {
    if(this.maxSectionNumber === sectionNumber){
      this.isLastSection = true;
    }else if(this.sectionNumber > this.maxSectionNumber){
      this.nextButton.style.display = 'none';
      return;
    }
    
    this.convertedQuestions.forEach((question)=>{
      question.hide();
    });
    // this.nextButton.style.display = 'none';
    // this.parentElement.querySelector('.section-header') ? this.parentElement.querySelector('.section-header').style.display = 'none' : null;
    let section = this.parentElement.querySelector('.section-header');
    if(section){
      this.questionsContainer.removeChild(section);
    }
    this.initSection(sectionNumber);
  }

  findAllFalse = () =>{
    return this.convertedQuestions.filter((ques)=> !ques.resultCorrect);
  }

  checkCorrect = () =>{
    for(let i = 0; i < this.convertedQuestions.length; i++){
      this.convertedQuestions[i].check(false);
    }
    const falseValues = this.findAllFalse();
    if(!falseValues.length){
      this.renderNextSectionButton();
    }

  }
  
  questionCallback = (isChangedQuestionCorrect) => {
    if(isChangedQuestionCorrect){
      const falseValues =  this.findAllFalse();
      if(!falseValues.length){
        this.checkCorrect();
      }
    }
  }

  renderMainControls = () =>{

    const html = `
    <div class = "questions-list"> </div>
    <div class="button-container">
      <button class="button" id="check_button">Check the answers</button>
      <button class="button" id="next-section">Next Section</button> 

    </div>
    `
    this.parentElement.insertAdjacentHTML('beforeend', html);

    this.checkButton = document.querySelector('#check_button');
    this.nextButton = document.querySelector('#next-section');
    // this.nextButton.style.display = 'none';

    this.checkButton.addEventListener('click', this.checkCorrect);
    // this.nextButton.addEventListener('click', ()=>{this.changeSection(this.currentSection + 1);});
    this.nextButton.addEventListener('click', ()=>{this.renderCongrats();});

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
    this.questionsContainer.style.display = 'none';
    this.parentElement.querySelector('.button-container').style.display = 'none';
    let allQuestionsLength = this.convertedQuestions.length + this.oldQuestions.length - this.sections.length;
    let firstTimeCorrectCount = this.convertedQuestions.filter((quest)=>{
      return quest.firstTimeCorrect;
    }).length;

    firstTimeCorrectCount += this.oldQuestions.filter((quest)=>{
      return quest.firstTimeCorrect;
    }).length;

    firstTimeCorrectCount  = firstTimeCorrectCount - this.sections.length;
    const percentage = (firstTimeCorrectCount / allQuestionsLength) * 100;

    const html = `
      <div class="last-message">
        Grats, you have completed the test!
        ${Math.round(percentage)}% correct!
      </div>
    `;
    this.parentElement.insertAdjacentHTML('beforeend', html);
    // alert('grats!');
  }

  renderQuiz = () => {
    for(let i = 0; i<this.convertedQuestions.length; i++){
      this.convertedQuestions[i].renderQuestion();
    }
  }


}

export default QuizController;
