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



const testData = [{"header":"Mission 2.6.1 Write IF or WHEN.","questions":[{"questionType":"text-in-blank","questionText":"___ I’m late this evening, don’t wait for me.","rightAnswers":["If"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":" I’m going to do some shopping now. ___ I come back, we can have lunch.","rightAnswers":["When"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":" I’m thinking of going to see Tom. ___ I go, will you come with me?","rightAnswers":["If"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":" ___ you don’t want to go out tonight, we can stay at home.","rightAnswers":["If"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":" Is it OK ___ I close the window?","rightAnswers":["if"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":" John is still at school. ___ he leaves school, he wants to go to college.","rightAnswers":["When"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":" Shall we have a picnic tomorrow ___ the weather is good?","rightAnswers":["if"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":" We’re going to Madrid next week. We don’t have anywhere to stay – we hope to find a hotel ___ we get there.","rightAnswers":["when"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"I don’t know what we’ll do ___ we don’t find a room.","rightAnswers":["if"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"Don’t worry ___ I’m late tonight.","rightAnswers":["if"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"Be careful. You’ll hurt yourself ___ you fall.","rightAnswers":["if"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"I’m going to Rome next week. ___ I’m there, I hope to visit a friend of mine.","rightAnswers":["When"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"I’m going shopping. ___ you want anything, I can get it for you.","rightAnswers":["If"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"If don’t see you tomorrow, ___ will I see you again?","rightAnswers":["when"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"I’m going away for a few days. I’ll call you ___ I get back.","rightAnswers":["when"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"I hope Sarah can come to the party. It will be a shame ___ she can’t come.","rightAnswers":["if"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"We can eat at home or, ___ you prefer, we can go to a restaurant.","rightAnswers":["if"],"variants\r":"\r"}]},{"header":"Mission 2.6.2 Which is right? Do NOT write the sentences in full.","questions":[{"questionType":"text-in-blank","questionText":"(I stay / I'll stay) ___ here until (you come / you'll come) ___ back.","rightAnswers":["I will stay"," you come"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"I’m going to bed when __ my work. (I finish / I’ll finish)","rightAnswers":["I finish"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"We must do something before __ too late. (it's / it will be)","rightAnswers":["it is"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"Helen is going away soon. (I'm / I'll be) ___ very sad when (she leaves / she'll leave) ___.","rightAnswers":["I will be"," she leaves"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"Don’t go out yet. Wait until the rain __. (stops / will stop)","rightAnswers":["stops"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"(We come / We'll come) ___ and visit you when (we're / we'll be) ___ in England again.","rightAnswers":["We will come"," we are"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"When I come to see you tomorrow, __ our holiday photos.  (I bring / I'll bring)","rightAnswers":["I will bring"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"I’m going to Paris next week. I hope to see some friends of mine while ___ there.  (I'm / I'll be)","rightAnswers":["I am"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"Let's go out for a walk before __ dark. (it gets / it will get)","rightAnswers":["it gets"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"I'm not ready yet. (I tell / I'll tell) ___ you when (I'm / I'll be) ___ ready.","rightAnswers":["I will tell"," I am"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"Will you call me if  __ you my phone number? (I give / I'll give)","rightAnswers":["I give"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"If __ a fire, the alarm will ring. (there is / there will be)","rightAnswers":["there is"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"If I don't see you tomorrow morning, __ you in the evening. (I call / I'll call)","rightAnswers":["I will call"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"(I'm / I'll be) ___ surprised if Michael and Jane (get / will get) ___ married.","rightAnswers":["I will be"," get"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"(Do you go / Will you go) ___ to the party if (they invite / they’ll invite) ___ you?","rightAnswers":["Will you go"," they invite"],"variants\r":"\r"}]},{"header":"Mission 2.6.4 Complete the sentences using the verbs in brackets. All the sentences are about the future. Do NOT write the sentences in full. Do not ignore upper-case letters when they are required. If you need to write two verb forms, separate them with a comma (with a space after it). ","questions":[{"questionType":"text-in-blank","questionText":"When __ in London again, come and see us. (you / be)","rightAnswers":["you're","you are"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"I want to see Sophie before __ out. (she / go)","rightAnswers":["she goes"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"Call me when __ what time you’re going to get here (you / know)","rightAnswers":["you know"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"I’m going out now. (you / be) ___ here when (I / get) ___ back?","rightAnswers":["Will you be"," I get"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"I think everything will be fine, but if (there / be) ___ any problems, (I / call) ___ you, OK?","rightAnswers":["there are"," I will call"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"We must do something soon before __ too late. (it / be)","rightAnswers":["it is"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"Anna looks very different now. When (you / see) ___ her again, (you / not / recognise) ___ her.","rightAnswers":["you see"," you will not recognise"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"Steve has applied for the job, but he isn’t really qualified for it. (I / be) ___ surprised if (he / get) ___ it.","rightAnswers":["I'll be"," he gets"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"I’m going to be away for a few days. If (you / need) ___ to contact me while (I / be) ___ away, here’s my mobile number.","rightAnswers":["you need"," I am"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"I don’t want to go without you. (I / wait) ___ for you until (you / be) ___ ready.","rightAnswers":["I will wait"," you are"],"variants\r":"\r"}]},{"header":"Mission 2.6.5 Make one sentence from two. DON'T start with WHEN/AFTER and DON'T use a comma.","questions":[{"questionType":"simple-text","questionText":"It will stop raining soon. Then we'll go out.","rightAnswers":["We wlll go out when it stops raining.","We wlll go out after it stops raining."],"variants\r":"\r"},{"questionType":"simple-text","questionText":"I'll find somewhere to live. Then I'll give you my address.","rightAnswers":["I will give you my address when I find somewhere to live.","I will give you my address after I find somewhere to live."],"variants\r":"\r"},{"questionType":"simple-text","questionText":"I'll do the shopping. Then I'll come straight back home.","rightAnswers":["I will come straight back home after I do the shopping.","I will come straight back home when I do the shopping."],"variants\r":"\r"},{"questionType":"simple-text","questionText":"It's going to get dark. Let's go home before that.","rightAnswers":["Let's go home before it gets dark."],"variants\r":"\r"},{"questionType":"simple-text","questionText":"She must apologise to me first. I won't speak to her until then.","rightAnswers":["I won't speak to her until she apologises to me."],"variants\r":"\r"}]},{"header":"Mission 2.6.6 Read the situations and complete the sentences. Do NOT write the sentences in full.","questions":[{"questionType":"text-in-blank","questionText":"A friend of yours is going on holiday. You want to know what she is going to do. You ask: What are you going to do when _______________?","rightAnswers":["you are on holiday","you go on holiday","you're on holiday"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"You want to sell your car. Mark is interested in buying it, but he hasn’t decided yet. You ask: Can you let me know as soon as ____________?","rightAnswers":["you decide"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"Your friends are going to Hong Kong soon. You want to know where they’re going to stay. You ask: Where are you going to stay when ____________?","rightAnswers":["you are there","you are in Hong Kong","you're there","you're in Hong Kong"],"variants\r":"\r"},{"questionType":"text-in-blank","questionText":"The traffic is very bad in your town, but they are going to build a new road. You say: I think things will be better when they ____________. ","rightAnswers":["build a new road"],"variants\r":"\r"}]}];


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

  const html = `<button class="button" id="start">Start Quiz</button>`
  const container = document.querySelector('#quiz');
  container.insertAdjacentHTML('beforeend', html);
  const button = container.querySelector('#start');

  start.addEventListener('click', ()=>{
    container.removeChild(button);
    new QuizController(testData, container);
  });



});

