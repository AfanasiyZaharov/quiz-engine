

export const validateErrorText = (rightAnswers) =>{
  return `right answer are ${rightAnswers.join(', ')}`;
}

export const questionTemplate = (questionData, id) => {
  console.log('id', id);
  if(questionData.questionType === 'text-in-blank'){
    const splitted = questionData.questionText.split(/_+/);
    // const width = questionData.rightAnswers.find((length))
    return `
    <div class = "question" id="${id}">
      <div class="question-text">${splitted.join(`${answerTemplateInBlank(answerTemplateInBlank, 60)}`)}</div>
      <div class="check-sign"><i class="fa fa-check-circle-o" aria-hidden="true"></i></div>
      <div class="right-answers"><i class="fa fa-question-circle-o" aria-hidden="true"></i></div>
    </div>
  `;
  }else{
    return `
    <div class = "question" id="${id}">
      <div class="question-text">${questionData.questionText}</div>
      <div class="answer">
        ${answerTemplate(questionData)}
      </div>
      <div class="check-sign"><i class="fa fa-check-circle-o" aria-hidden="true"></i></div>
      <div class="right-answers"><i class="fa fa-question-circle-o" aria-hidden="true"></i></div>
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

    console.log(`      <form>
    <div>
      ${questionData.variants.map((value, index)=>`
        <input type="radio" id="${questionData.questionText}-${index}"
          name="${questionData.questionText}-${index}" value="${value}" />
        <label for="${questionData.questionText}-${index}">${value}</label>
      `).join(' ')}
    </div>
  </form>`);

    return `
      <form>
        <div>
          ${questionData.variants.map((value, index)=>`
            <input type="radio" id="${questionData.questionText}-${index}"
              name="${questionData.questionText}" value="${value}" />
            <label for="${questionData.questionText}-${index}">${value}</label>
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
