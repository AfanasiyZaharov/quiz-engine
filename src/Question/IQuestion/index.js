import SimpleTextQuestion from './SimpleText';
import TextInBlankQuestion from './TextInBlank';
import MultiTextInBlankQuestion from './MultipleTextInBlank';
import SingleVariantQuestion from './SingleVariants';
import MultiVariantsQuestion from './MultiVariants';
import uid from '../../_utils/uid';



export class TextBeforeQuestion{
  constructor(text, parentElem){
    this.text = text;
    this.parentElem = parentElem;
    this.resultCorrect = true;
    this.firstTimeCorrect = true;
    this.uid = uid();
  }

  hide = () =>{
    this.mainElement.style.display = "none";
  }

  check = () =>{
    
  }

  renderQuestion = () =>{
    const splitRegExp = new RegExp(/(Mission [0-9.]+) /);
    let splittedText = this.text.split(splitRegExp);
    if(splittedText.length !== 3){
      splittedText = this.text;
    }else{
      splittedText = `${splittedText[0]}${splittedText[1]} </br> <span class="text-question-italic">${splittedText[2]}</span>`;
    }
    const sectionHeaderText = `<div class="question section-header" id="${this.uid}">${splittedText}</div>`;
    this.parentElem.insertAdjacentHTML('beforeend', sectionHeaderText);
    this.mainElement = this.parentElem.querySelector(`#${this.uid}`);
  }
}


const createTextInBlank = (questionData, parentElem, callback, sectionIndex, questionIndex) =>{
  if(questionData.questionText.match(/_+/g).length > 1){
    return new MultiTextInBlankQuestion(questionData, parentElem, callback, false, sectionIndex, questionIndex);
  }else {
    return new TextInBlankQuestion(questionData, parentElem, callback, false, sectionIndex, questionIndex);
  }
}

export const createQuestion = (questionData, parentElem, callback, testMode=false, sectionIndex, questionIndex) =>{
  if(testMode && questionData.questionType !== 'variants-single'){
    throw new Error(`test mode is enabled, but question' type is ${questionData.questionType }`)
  }
  console.log('qies', questionData);
  switch(questionData.questionType){
    case 'simple-text':
      return new SimpleTextQuestion(questionData, parentElem, callback, false, sectionIndex, questionIndex);
    case 'text-in-blank':
      return createTextInBlank(questionData, parentElem, callback, sectionIndex, questionIndex)
    case 'variants-multi':
      return new MultiVariantsQuestion(questionData, parentElem, callback, false, sectionIndex, questionIndex);
    case 'variants-single':
      let quesVariants;
      if(questionData['variants\r'] ){
        quesVariants = questionData['variants\r']
      }else if(questionData['variants']){
        quesVariants = questionData['variants'];
      }

      if(typeof quesVariants === 'string'){
        questionData.variants = quesVariants.split('||');
      }

      return new SingleVariantQuestion(questionData, parentElem, callback, testMode, sectionIndex, questionIndex);
      //return new TextInBlankQuestion(questionData, parentElem, callback);
  }
}