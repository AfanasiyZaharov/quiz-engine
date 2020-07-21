import QuizController from './QuizController';

/*
modules:
  1. module to parse data from csv or etc
  2. module to show quiz data, pagination, etc.
  3. module to check answer.
  4. module to send data to server (or smth like this)

*/

// const testQuesions = [
//   {
//     questionType: 'simple-text',
//     questionText: 'I went out in the cold without a coat. (silly)',
//     rightAnswers: ['It was silly of me to go out in the cold without a coat'],
//   },
//   {
//     questionType: 'text-in-blank',
//     questionText: 'There are not many things people will not do ____ fear.',
//     rightAnswers: ['out of'],
//   },
//   {
//     questionType: 'variants-single',
//     questionText: 'I live in a very small village. You probably won’t find it __ your map.',
//     rightAnswers: ['on'],
//     variants: ['in', 'on'],
//   },
//   {
//     questionType: 'variants-multi',
//     questionText: 'test multi variant',
//     rightAnswers: ['on', 'in'],
//     variants: ['in', 'on'],
//   }
// ] 



document.addEventListener("DOMContentLoaded", ()=>{

  // inject styles to page
  const appendStyles = () => {
    const scss = require('./styles/index.scss');
    const head = document.getElementsByTagName('head')[0];

    const styleElem = document.createElement('style');
    styleElem.innerHTML = scss;

    head.appendChild(styleElem);
  }
  
  appendStyles();

  const html = `<button class="button" id="start">Start</button>`
  const container = document.querySelector('#quiz');
  container.insertAdjacentHTML('beforeend', html);
  const button = container.querySelector('#start');

  start.addEventListener('click', ()=>{
    container.removeChild(button);
    new QuizController(window.testData, container);
  });



});

