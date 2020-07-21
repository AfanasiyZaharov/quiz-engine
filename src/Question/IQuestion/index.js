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
      splittedText = `${splittedText[0]}${splittedText[1]} </br> ${splittedText[2]}`;
    }
    const sectionHeaderText = `<div class="question section-header" id="${this.uid}">${splittedText}</div>`;
    this.parentElem.insertAdjacentHTML('beforeend', sectionHeaderText);
    this.mainElement = this.parentElem.querySelector(`#${this.uid}`);
  }
}


const createTextInBlank = (questionData, parentElem, callback) =>{
  if(questionData.questionText.match(/_+/g).length > 1){
    return new MultiTextInBlankQuestion(questionData, parentElem, callback);
  }else{
    return new TextInBlankQuestion(questionData, parentElem, callback);
  }
}

export const createQuestion = (questionData, parentElem, callback) =>{
  switch(questionData.questionType){
    case 'simple-text':
      return new SimpleTextQuestion(questionData, parentElem, callback);
    case 'text-in-blank':
      return createTextInBlank(questionData, parentElem, callback)
    case 'variants-multi':
      return new MultiVariantsQuestion(questionData, parentElem, callback);
    case 'variants-single':
      return new SingleVariantQuestion(questionData, parentElem, callback);
      //return new TextInBlankQuestion(questionData, parentElem, callback);
  }
}