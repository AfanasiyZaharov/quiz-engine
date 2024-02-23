
import Section from './Section';
class QuizController {

  questions = [];
  convertedQuestions = [];
  oldQuestions = [];

  constructor(sections = [], parentElement, testMode=false) {
    this.sections = sections;
    this.maxSectionNumber = sections.length - 1;
    this.testMode = testMode
    if (this.maxSectionNumber === 0) {
      this.isLastSection = true;
    }
    this.parentElement = parentElement;

    this.renderMainControls();
    this.convertedSections = sections.map((section, index) => {
      return new Section(section, this.questionsContainer, this.renderNextSectionButton, index, testMode);
    });

    // this.currentSection = 0;
    this.changeSection(0);

    if(testMode){
      this.renderNextSectionButton()
    }
  }

  initSection = (sectionNumber) => {
    this.currentSection = sectionNumber;

    this.convertedSections[sectionNumber].renderSection();

    this.numberTextContainer.innerText = `Section ${sectionNumber + 1} of ${this.convertedSections.length}`;

  }

  changeSection = (sectionNumber) => {
    this.sectionNumber = sectionNumber;
    if (sectionNumber < 0) {
      return;
    }
    if (sectionNumber > 0) {
      this.prevButton.style.display = 'block';
    } else {
      this.prevButton.style.display = 'none';
    }
  
    if (sectionNumber > this.currentSection) {
      if (this.maxSectionNumber === sectionNumber) {
        this.isLastSection = true;
      } else if (this.sectionNumber > this.maxSectionNumber) {
        this.nextButton.style.display = 'none';
        return;
      }
    }

    if (this.currentSection !== undefined && this.currentSection !== null) {
      this.convertedSections[this.currentSection].hideSection();
    }

    if (!this.convertedSections[sectionNumber].completed) {
      this.nextButton.style.display = 'none';
    } else {
      if (!(sectionNumber >= this.maxSectionNumber)) {
        this.nextButton.style.display = 'block';
      } else {
        this.nextButton.style.display = 'none';
      }

    }

    this.initSection(sectionNumber);
    if(this.testMode){
      this.renderNextSectionButton()
    }
  }

  renderMainControls = () => {

    const html = `
    <div class = "questions-list"> </div>
    <div id="number-container"></div>
    <div class="button-container">
      <button class="button" id="prev-section">Prev Section</button> 
      <button class="button" id="check_button">Check the answers</button>
      <button class="button" id="next-section">Next Section</button>
      <button class="button" id="end-quiz">End quiz</button> 
    </div>
    `
    this.parentElement.insertAdjacentHTML('beforeend', html);

    this.checkButton = document.querySelector('#check_button');
    if(this.testMode){
      this.checkButton.style.display = 'none'
    }

    this.endQuizButton = document.querySelector('#end-quiz');
    this.endQuizButton.style.display = 'none';

    this.nextButton = document.querySelector('#next-section');
    this.nextButton.style.display = 'none';

    this.prevButton = document.querySelector('#prev-section');
    this.prevButton.style.display = 'none';

    this.numberTextContainer = document.querySelector('#number-container');

    this.checkButton.addEventListener('click', () => {
      this.convertedSections[this.currentSection].checkCorrect();
    });
    this.nextButton.addEventListener('click', () => { this.changeSection(this.currentSection + 1); });
    this.prevButton.addEventListener('click', () => { this.changeSection(this.currentSection - 1); });

    this.questionsContainer = this.parentElement.querySelector('.questions-list');
  }

  renderNextSectionButton = () => {
    console.log('render', this.isLastSection)
    if (!this.isLastSection) {
      this.nextButton.style.display = 'block';
    } else {
      this.endQuizButton.style.display = 'block';
      this.endQuizButton.addEventListener('click', () => {
        if(this.testMode){
          this.renderEndOfTest()
          
        }else{
          this.renderCongrats();
        }

      });
    }

  }

  renderEndOfTest = () =>{
    this.questionsContainer.style.display = 'none';
    this.numberTextContainer.style.display = 'none';
    this.parentElement.querySelector('.button-container').style.display = 'none';

    this.convertedSections.forEach((section)=>{
      section.checkCorrect()
    });
    
    let allQuestions = [];
    for (let i = 0; i < this.convertedSections.length; i++) {

      allQuestions = [...allQuestions, ...this.convertedSections[i].convertedQuestions];
    }
    let allQuestionsLength = allQuestions.length - this.convertedSections.length;


    let correctCount = allQuestions.filter((quest) => {
      return quest.resultCorrect;
    }).length;

    correctCount = correctCount - this.sections.length;

    console.log(`result: ${correctCount} out of ${allQuestionsLength}`)

    let resultLevel = 'A0'

    if(correctCount >= 10){
      resultLevel = 'A1'
    }
    if(correctCount >= 20){
      resultLevel = 'A2'
    }
    if(correctCount >= 25){
      resultLevel = 'B1'
    }
    if(correctCount >= 35){
      resultLevel = 'B2'
    }
    if(correctCount >= 42){
      resultLevel = 'C1'
    }
    if(correctCount >= 47){
      resultLevel = 'C2'
    }

    const html = `
      <div class="last-message">
        <div class="message">
          Grats, you have completed the test!
        </div>
        <div class="message">
        You got ${correctCount} out of ${allQuestionsLength}
        </div>
        <div class="message">
        Your level is ${resultLevel}
        </div>
      </div>
    `;
    const oldLastMessage = this.parentElement.querySelector('.last-message');
    if (oldLastMessage) {
      this.parentElement.removeChild(oldLastMessage);
    }

    this.parentElement.insertAdjacentHTML('beforeend', html);
  }

  renderCongrats = () => {
    this.questionsContainer.style.display = 'none';
    this.numberTextContainer.style.display = 'none';
    this.parentElement.querySelector('.button-container').style.display = 'none';
    let allQuestions = [];
    for (let i = 0; i < this.convertedSections.length; i++) {
      // allQuestionsLength += this.convertedSections[i].convertedQuestions.length;
      allQuestions = [...allQuestions, ...this.convertedSections[i].convertedQuestions];
    }
    let allQuestionsLength = allQuestions.length - this.convertedSections.length;


    let firstTimeCorrectCount = allQuestions.filter((quest) => {
      return quest.firstTimeCorrect;
    }).length;

    firstTimeCorrectCount = firstTimeCorrectCount - this.sections.length;
    const percentage = (firstTimeCorrectCount / allQuestionsLength) * 100;

    const html = `
      <div class="last-message">
        Grats, you have completed the test!
        ${Math.round(percentage)}% correct!
      </div>
    `;
    const oldLastMessage = this.parentElement.querySelector('.last-message');
    if (oldLastMessage) {
      this.parentElement.removeChild(oldLastMessage);
    }

    this.parentElement.insertAdjacentHTML('beforeend', html);
  }


}

export default QuizController;
