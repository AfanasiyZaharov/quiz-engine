const windows1251 = require('windows-1251');
const parser = require('papaparse');

document.addEventListener("DOMContentLoaded", ()=>{

  document.getElementById('upload').addEventListener('change', readFileAsString);
    function readFileAsString() {
        var files = this.files;
        if (files.length === 0) {
            console.log('No file is selected');
            return;
        }

        var reader = new FileReader();
        reader.onload = function(event) {
            console.log('File content:', event.target.result);
            let textFileData = event.target.result;

            console.log('papa ', parser.parse(textFileData))
            createCSVData(textFileData);
        };
        reader.readAsText(files[0]);
    }


    const createCSVData = (text) =>{
      const textArr = text.replace('\r', '').split('\n');
      const keys = textArr.shift().split(';');
      const questionsSections = textArr.map((line)=> createObjFromCsvLine(line, keys)).filter(obj=>!!obj).map(postProcess);
      const sectionsBase = questionsSections.reduce((accum, value)=>{
        console.log('accum', accum);
        if(value.header){
          accum.push(value);
        }else{
          if(accum.length){
            accum[accum.length-1].questions.push(value);
          }
        }
        return accum;
      }, []);

      console.log(textArr, questionsSections, sectionsBase);
      console.log(JSON.stringify(sectionsBase, 4));
      const insertHTML = `
        <div id = "quiz"></div>
        <script src="https://use.fontawesome.com/cb33df8389.js"></script>
        <script> window.testData = ${JSON.stringify(sectionsBase, 4)}</script>
        <script src ="https://cdn.jsdelivr.net/gh/AfanasiyZaharov/quiz-engine/dist/app.js"></script>
      `;
      document.querySelector('#code-container').innerText = insertHTML;
    }
    const createObjFromCsvLine = (textLine, keys) =>{
      const values = textLine.split(';');
      if(!values[1] && values[0] === ""){
        return null;
      }
      if(values[1] === "" && values[2] === ""){
        return {
          header: values[0],
          questions: [],
        };
      }else{
        return {
          [keys[0]]: values[0],
          [keys[1]]: values[1],
          [keys[2]]: values[2],
          [keys[3]]: values[3] || null,
        }
      }
    }

    const postProcess = (elem) =>{
      let resultElem = {...elem};
      if(elem.header){
        elem.header = elem.header.replace(/^ +/, '').replace(/"/g, '');
        return elem;
      }

      if(resultElem.questionType.includes('Несколько из списка')){
        resultElem.questionType = 'variants-multi';
      }
      if(resultElem.questionType.includes('Один из списка')){
        resultElem.questionType = 'variants-single';
      }
      if(resultElem.rightAnswers){
        resultElem.rightAnswers = elem.rightAnswers.split('||');
      }
      if(elem.variants){
        if(elem.variants){
          resultElem.variants = elem.variants.split('||');
        }else{
          resultElem.variants = elem['variants\r'].split('||');
        }

      }
      return resultElem;
    }
});



const allAnswers = document.querySelectorAll('.answer');
const resultData = []
for(let i = 0; i<allAnswers.length; i++){
  const result = {}
  const ans = allAnswers[i];
  result.text = ans.querySelector('.answer_title').innerText

  const allVariants = ans.querySelector('.answer_request').querySelectorAll('.answer-text')
  result.variants = [...allVariants].map((elem)=>elem.innerText)
  resultData.push(result)
}

console.log(resultData)
console.log(JSON.stringify(resultData))
