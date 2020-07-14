const sectionSelector = '.freebirdFormeditorViewPageRoot';

const pageSectionTextSelector = '.freebirdFormeditorViewPagePageFields';

const pageSectionTextFind = 'textarea'; // two text areas, combine their values


const questionDomSelector = '.freebirdFormeditorViewItemcardRoot';

const questionTextSelector = '.exportTextarea.appsMaterialWizTextinputTextareaInput';

const text_question_right_answer = '.freebirdFormeditorViewQuestionBodyShorttextbodyCorrect' // parent , inner Text, replace "Правильный ответ:"




// selection from variants
const selectionVariants = '.freebirdFormeditorViewOmnilistItemRoot' // to have correctness - should have selectionRightElem // to have values - get input value

const selectionRightElem = '.freebirdFormeditorViewOmnilistItemCorrectnessIndicator';

const typeOfQuestionSelector = '.quantumWizMenuPaperselectOption[aria-selected="true"]';


var formDocument = () =>{
  const docHeader = document.title;

  const sections = [];

  const sectionsDom = Array.from(document.querySelectorAll(sectionSelector));
  sectionsDom.forEach((element)=>{
    let resultObj = {};
    const textareasName = Array.from(element.querySelector(pageSectionTextSelector).querySelectorAll(pageSectionTextFind));
    let sectionMainText = '';
    textareasName.forEach((ta)=>{
      sectionMainText +=  ' ' + ta.value;
    });
    resultObj.header = sectionMainText;
    resultObj.questions = formQuestions(element);
    if(resultObj.questions.length){
      sections.push(resultObj);
    }
  });
    

  const resToExport = [];
  for (let i = 0; i<sections.length; i++){
    resToExport.push(...convertSectionToCSVprepare(sections[i]));
  }


  exportToCsv(`${docHeader}.csv`, [
      ['questionType', 'questionText', 'rightAnswers', 'variants'],
      ...resToExport
    
    ])
}


var convertSectionToCSVprepare = (section) =>{
  resultArr = [];
  resultArr.push([`${section.header}`, '', '' , '']);
  section.questions.forEach((question)=>{
    resultArr.push([`${question.questionType}`, `${question.questionText}`, `${question.rightAnswers.join('||')}`, `${question.variants ? question.variants.join('||') : ''}`]);
  });
  return resultArr;
}

var formQuestions = (rootElem) =>{
  let resultArr = [];
  const questionsDom = Array.from(rootElem.querySelectorAll(questionDomSelector));

  resultArr = questionsDom.map(findQuestionData).filter((elem)=>elem);
  return resultArr;
}

var findQuestionData = (questionElem) =>{
  const questionText = questionElem.querySelector(questionTextSelector).value;
  let questionType;
  let rightAnswers;
  let rightAnswerDom = questionElem.querySelector(text_question_right_answer);
  let rightAnswerVariants;
  if(questionText === ''){
    return null;
  }
  if(rightAnswerDom){
    rightAnswers = rightAnswerDom.parentElement.innerText.replace('Правильный ответ: ', '').replace('Правильные ответы: ', '').split(',');
  }else{
    rightAnswerVariants = findQuestionVariants(questionElem);

  }
  if(rightAnswers){
    questionType = questionText.match(/_+/) ? 'text-in-blank' : 'simple-text'; 
  }else{
    questionType = rightAnswerVariants.questionType;
  }
  if(!questionType && rightAnswerVariants.rightAnswers && rightAnswerVariants.rightAnswers.length === 0){
    return null;
  }
  return {
    questionText,
    rightAnswers,
    questionType,
    ...rightAnswerVariants,
  }
}

var findQuestionVariants = (questionElem) =>{
  const variantsDom = Array.from(questionElem.querySelectorAll(selectionVariants));
  const variants = variantsDom.map((varDom)=>varDom.querySelector('input').value);
  const rightAnswers = variantsDom.filter((varDom)=> varDom.querySelector(selectionRightElem)).map((varDom)=>varDom.querySelector('input').value);
  console.log('questi elem', questionElem);
  let questionType = questionElem.querySelector(typeOfQuestionSelector)
  if(questionType){
    questionType = questionType.innerText;
    questionType = questionType.replace(/^ +/, '');
    if(questionType === 'Несколько из списка' || questionType.includes('Несколько из списка')){
      questionType = 'variants-multi';
    }else if(questionType === 'Один из списка' || questionType.includes('Один из списка')){
      questionType = 'variants-single';
    }
  }
  return {
    variants,
    rightAnswers,
    questionType,
  }
}






function exportToCsv(filename, rows) {
  var processRow = function (row) {
      var finalVal = '';
      for (var j = 0; j < row.length; j++) {
          var innerValue = row[j] === null ? '' : row[j].toString();
          if (row[j] instanceof Date) {
              innerValue = row[j].toLocaleString();
          };
          var result = innerValue.replace(/"/g, '""');
          if (result.search(/("|,|\n)/g) >= 0)
              result = '"' + result + '"';
          if (j > 0)
              finalVal += ';';
          finalVal += result;
      }
      return finalVal + '\n';
  };

  var csvFile = '';
  for (var i = 0; i < rows.length; i++) {
      csvFile += processRow(rows[i]);
  }

  var blob = new Blob([csvFile], { type: 'text/csv;charset=Windows-1251' });
  if (navigator.msSaveBlob) { // IE 10+
      navigator.msSaveBlob(blob, filename);
  } else {
      var link = document.createElement("a");
      if (link.download !== undefined) { // feature detection
          // Browsers that support HTML5 download attribute
          var url = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute("download", filename);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      }
  }
}


formDocument();
