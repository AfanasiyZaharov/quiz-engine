
export const validateErrorText = (rightAnswers) =>{
  return `
    <div class="hints-answers-container">
      ${rightAnswers.map((answer)=> `<div class="hint">${answer}</div>`).join(' ')}
    </div>
  `;
  // return `right answer are ${rightAnswers.join(', ')}`;
}

const calculateWidth =  (answers) =>{
  let maxLength = 0;
  for(let i = 0; i<answers.length; i++){
    if(answers[i].length > maxLength){
      maxLength = answers[i].length;
    }
  }
  if(maxLength < 7){
    return 60;
  }
  if(maxLength < 10){
    return 90;
  }
  if(maxLength < 18){
    return 150;
  }
  if(maxLength < 25){
    return 200;
  }
  return 210;
}

export const questionTemplate = (questionData, id) => {
  if(questionData.questionType === 'text-in-blank'){
    const splitted = questionData.questionText.split(/_+/);
    const width = calculateWidth(questionData.rightAnswers);
    return `
    <div class = "question in-blank" id="${id}">
      <div class="question-text">${splitted.join(`${answerTemplateInBlank(answerTemplateInBlank, width)}`)}</div>
      <div class="check-sign"><i class="fas fa-sign-in-alt"></i></div>
      <div class="hint-sign"><i class="far fa-question-circle"></i></div>
      <div class="hint-container"></div>
    </div>
  `;
  }else{
    return `
    <div class = "question" id="${id}">
      <div class="question-text">${questionData.questionText}</div>
      <div class="answer">
        ${answerTemplate(questionData)}
      </div>
      <div class="check-sign"><i class="fas fa-sign-in-alt"></i></div>
      <div class="hint-sign"><i class="far fa-question-circle"></i></div>
      <div class="hint-container"></div>
    </div>
  `;
  }

}

export const answerTemplateInBlank = (questionData, width) =>{
  return `
  <div style="width:${width}px;" class = "answer-text in-blank">
    <input class = "answer-text-input in-blank" />
  </div>
`
}

export const answerTemplate = (questionData) =>{
  if(questionData.questionType === 'simple-text' || questionData.questionType === 'text-in-blank'){
    return `
      <div class = "answer-text">
        <input class = "answer-text-input " />
      </div>
    `;
  }
  if(questionData.questionType === 'variants-single'){

    return `
      <form>
        <div>
          ${questionData.variants.map((value, index)=>`
          <div class="checkbox-container">
            <input type="radio" id="${questionData.questionText}-${index}"
              name="${questionData.questionText}" value="${value}" />
            <label for="${questionData.questionText}-${index}">${value}</label>
            </div>
          `).join(' ')}
        </div>
      </form>
    `;
  }

  if(questionData.questionType === 'variants-multi'){
    return `
      <form>
        <div>
          ${questionData.variants.map((value, index)=>`
            <input type="checkbox" id="${questionData.questionText}-${index}"
              name="${questionData.questionText}" value="${value}" />
            <label for="${questionData.questionText}-${index}">${value}</label>
          `).join(' ')}
        </div>
      </form>
    `;
  }
}
