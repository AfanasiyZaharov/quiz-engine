
export const validateErrorText = (rightAnswers) => {
  return `
    <div class="hints-answers-container">
      ${rightAnswers.map((answer) => `<div class="hint">${answer}</div>`).join(' ')}
    </div>
  `;
}

const calculateWidth = (answers) => {
  let maxLength = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].length > maxLength) {
      maxLength = answers[i].length;
    }
  }
  if (maxLength < 7) {
    return 60;
  }
  if (maxLength < 10) {
    return 90;
  }
  if (maxLength < 18) {
    return 150;
  }
  if (maxLength < 25) {
    return 200;
  }
  return 210;
}


const insertMultiText = (splitted, width, writtenAnswers) => {
  if (splitted.length === 2) {
    return splitted.join(`${answerTemplateInBlank(undefined, width, writtenAnswers)}`)
  } else {
    let res = '';
    for (let i = 0; i < splitted.length; i++) {
      res += splitted[i];
      if (i < splitted.length - 1) {
        res += answerTemplateInBlank(undefined, width, writtenAnswers ? writtenAnswers[i] || '' : '')
      }
    }
    return res;
  }
}

export const questionTemplate = (questionData, id, alreadyWrittenAnswer) => {
  if (questionData.questionType === 'text-in-blank') {
    const splitted = questionData.questionText.split(/_+/);
    const width = calculateWidth(questionData.rightAnswers);
    return `
    <div class = "question in-blank" id="${id}">
      <div class="question-text">${insertMultiText(splitted, width, alreadyWrittenAnswer)}</div>
      <div class="check-sign"><i class="fas fa-sign-in-alt"></i></div>
      <div class="hint-sign"><i class="far fa-question-circle"></i></div>
      <div class="hint-container"></div>
    </div>
  `;
  } else {
    return `
    <div class = "question" id="${id}">
      <div class="question-text">${questionData.questionText}</div>
      <div class="answer">
        ${answerTemplate(questionData, id, alreadyWrittenAnswer)}
      </div>
      <div class="check-sign"><i class="fas fa-sign-in-alt"></i></div>
      <div class="hint-sign"><i class="far fa-question-circle"></i></div>
      <div class="hint-container"></div>
    </div>
  `;
  }

}

export const answerTemplateInBlank = (questionData, width, alreadyWrittenAnswer) => {
  return `
  <div style="width:${width}px;" class = "answer-text in-blank">
    <input class = "answer-text-input in-blank" value="${alreadyWrittenAnswer ? alreadyWrittenAnswer : ''}" />
  </div>
`
}

export const answerTemplate = (questionData, id, alreadyWrittenAnswer) => {
  if (questionData.questionType === 'simple-text' || questionData.questionType === 'text-in-blank') {
    return `
      <div class = "answer-text">
        <input value="${alreadyWrittenAnswer || ''}" class = "answer-text-input " />
      </div>
    `;
  }
  if (questionData.questionType === 'variants-single') {

    return `
      <form>
        <div>
          ${questionData.variants.map((value, index) => `
          <div class="checkbox-container">
            <input ${alreadyWrittenAnswer === value ? 'checked' : ''} type="radio" id="${questionData.questionText}-${index}-${id}"
              name="${questionData.questionText}" value="${value}" />
            <label for="${questionData.questionText}-${index}-${id}">${value}</label>
            </div>
          `).join(' ')}
        </div>
      </form>
    `;
  }

  if (questionData.questionType === 'variants-multi') {
    return `
      <form>
        <div>
          ${questionData.variants.map((value, index) => {
            const answerId = `${questionData.questionText}-${index}`
            const selected = alreadyWrittenAnswer.includes(value);
            return `
                  <input type="checkbox" id="${answerId}"
                    name="${questionData.questionText}" value="${value}" ${selected ? 'checked' : ''} />
                  <label for="${questionData.questionText}-${index}">${value}</label>
                `}).join(' ')}
              </div>
            </form>
          `;
  }
}
