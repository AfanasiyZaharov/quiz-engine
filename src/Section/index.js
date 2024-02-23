import {createQuestion, TextBeforeQuestion} from '../Question/IQuestion';

export default class Section{
  questions = [];
  convertedQuestions = [];
  rendered = false;
  completed = false;

  constructor(sectionData, container, allRightCallBack, number, testMode=false){
    this.header = sectionData.header;
    this.number = number;
    this.container = container;
    this.questions = sectionData.questions;
    this.allRightCallBack = allRightCallBack;
    this.testMode = testMode
    if(testMode){
      this.completed = true
    }
  }

  hideSection(){
    this.sectionContainer.style.display = 'none';
  }

  findAllFalse = () =>{
    return this.convertedQuestions.filter((ques)=> !ques.resultCorrect);
  }

  checkCorrect = () =>{
    // if(this.testMode){
    //   return
    // }
    for(let i = 0; i < this.convertedQuestions.length; i++){
      this.convertedQuestions[i].check(false);
    }
    const falseValues = this.findAllFalse();
    if(!falseValues.length){
      this.completed = true;
      this.allRightCallBack();
      //this.renderNextSectionButton();
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

  
  renderQuiz = () => {
    for(let i = 0; i<this.convertedQuestions.length; i++){
      this.convertedQuestions[i].renderQuestion();
    }
  }

  renderSection = () =>{
    if(this.rendered && this.sectionContainer){
      this.sectionContainer.style.display = 'block';
      return;
    }
    const html = `
      <div class = "section-${this.number}"> </div>
    `
    this.container.insertAdjacentHTML('beforeend', html);
    this.sectionContainer = this.container.querySelector(`.section-${this.number}`);
    this.convertedQuestions = [new TextBeforeQuestion(this.header, this.sectionContainer), ...this.questions.map((question)=>{
      return createQuestion(question, this.sectionContainer, this.questionCallback, this.testMode);
    })];
    this.rendered = true;

    this.renderQuiz();
    // sectionData.questions;
  }
}