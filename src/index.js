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



const testData = [{"header":" B4B Mission 1.20.1 Поставьте в пропуски предлоги AT, ON или IN. Не пишите предложения целиком.","questions":[{"questionType":"text-in-blank","questionText":"Let’s meet ___ 5 o’clock.","rightAnswers":["at"],"variants":null},{"questionType":"text-in-blank","questionText":"She never goes out ___ Fridays.","rightAnswers":["on"],"variants":null},{"questionType":"text-in-blank","questionText":"They sometimes go skiing ___ the winter.","rightAnswers":["in"],"variants":null},{"questionType":"text-in-blank","questionText":"We can meet ___ the weekend if you like.","rightAnswers":["at"],"variants":null},{"questionType":"text-in-blank","questionText":"See you ___ September!","rightAnswers":["in"],"variants":null},{"questionType":"text-in-blank","questionText":"My day starts ___ half past six.","rightAnswers":["at"],"variants":null},{"questionType":"text-in-blank","questionText":"I’m always busy ___ the week.","rightAnswers":["in"],"variants":null},{"questionType":"text-in-blank","questionText":"We are going on holiday ___ 6 November.","rightAnswers":["on"],"variants":null},{"questionType":"text-in-blank","questionText":"The film finishes ___ 10.50.","rightAnswers":["at"],"variants":null},{"questionType":"text-in-blank","questionText":"He can’t sleep ___ night.","rightAnswers":["at"],"variants":null},{"questionType":"text-in-blank","questionText":"We usually go to bed ___ the same time.","rightAnswers":["at"],"variants":null}]},{"header":" B4B Mission 1.20.2 Перефразируйте предложения с помощью слов past, to, quarter и half.","questions":[{"questionType":"simple-text","questionText":"I go to the shops at 2.15.","rightAnswers":["I go to the shops at quarter past two.","I go to the shops at a quarter past two."],"variants":null},{"questionType":"simple-text","questionText":"I start work at 9.30.","rightAnswers":["I start work at half past nine."],"variants":null},{"questionType":"simple-text","questionText":"I have a coffee break at 11.45.","rightAnswers":["I have a coffee break at quarter to twelve.","I have a coffee break at a quarter to twelve."],"variants":null},{"questionType":"simple-text","questionText":"I read emails at 3.15.","rightAnswers":["I read emails at quarter past three.","I read emails at a quarter past three."],"variants":null},{"questionType":"simple-text","questionText":"I send emails at 3.45.","rightAnswers":["I send emails at quarter to four.","I send emails at a quarter to four."],"variants":null},{"questionType":"simple-text","questionText":"I get up at 7.30.","rightAnswers":["I get up at half past seven."],"variants":null},{"questionType":"simple-text","questionText":"I go to bed at 1.15.","rightAnswers":["I go to bed at quarter past one.","I go to bed at a quarter past one."],"variants":null},{"questionType":"simple-text","questionText":"I have breakfast at 8.30.","rightAnswers":["I have breakfast at half past eight."],"variants":null},{"questionType":"simple-text","questionText":"I have lunch at 12.45.","rightAnswers":["I have lunch at quarter to one.","I have lunch at a quarter to one."],"variants":null},{"questionType":"simple-text","questionText":"I make phone calls at 2.15.","rightAnswers":["I make phone calls at quarter past two.","I make phone calls at a quarter past two."],"variants":null},{"questionType":"simple-text","questionText":"I finish work at 5.30.","rightAnswers":["I finish work at half past five."],"variants":null},{"questionType":"","variants":null}]}];


document.addEventListener("DOMContentLoaded", ()=>{
  new QuizController(testData, document.querySelector('#quiz'));
});

