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
            // if(textFileData.includes('�')){
            //   console.log('includes');
            //   console.log(windows1251.decode(textFileData));
            // }
            console.log('papa ', parser.parse(textFileData))
            createCSVData(textFileData);
        };
        reader.readAsText(files[0]);
    }


    const createCSVData = (text) =>{
      const textArr = text.split('\n');
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
        resultElem.variants = elem.variants.split('||');
      }
      return resultElem;
    }
});




function test(a,b){
  return a + b;
}


var MathMagic = {
  multiplier: 2,
  sum: function (a, b){
    return a+b*this.multiplier;
  }
}
