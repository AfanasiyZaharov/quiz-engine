import isEqual from 'lodash.isequal';

const ShorteningDictionary = {
  'can not': `can't`, 
  'will not': `won't`, 
  ' is': `'s`,
  '\'s': `'s`,
  ' have': `'ve`,
  ' has': `'s`,
  ' would': `'d`,
  ' had': `'d`,
  ' are': `'re`,
  ' will': `'ll`,
  ' am' : `'m`,
  'is not': `isn't`,
  'are not': `aren't`,
  'was not': `wasn't`,
  'were not': `weren't`,
  'has not': `hasn't`,
  'have not': `haven't`,
  
  'had not': `hadn't`,
  'does not': `doesn't`,
  'do not': `don't`,
  'did not': `didn't`,
  'could not': `couldn't`,
  'would not': `wouldn't`,
  'must not': `mustn't`, 
  'need not': `needn't`,
  'should not': `shouldn't`,
  'might not': `mightn't`,
  'dare not': `daren't`,
}


var findShorteningRegExp = new RegExp(/\w+(?='\w+)/g);



const compareTwo = (userAnswer, rightAnswer) =>{
  let workedUserAnswer = prepareString(userAnswer);
  let workedRightAnswer = prepareString(rightAnswer);
  return workedUserAnswer === workedRightAnswer;
}


// make trim, remove dot on the end, lowercase, ...etc
const prepareString = (answer) => {
  return answer.toLowerCase().replace(/\.$/, '').replace(/ +/g, ' ').replace(/ $/, '').replace(/^ /, '').replace(/\.$/, '');
}


export const validateSimpleText = (userAnswer, rightAnswers) =>{
  const userAnswersPossibilities = findShorteningsPossibilities(userAnswer);
  return compareEachToEach(userAnswersPossibilities, rightAnswers);
} 

const findMaxPrevious = (obj, currentKey) =>{
  let max = -1;
  for(let key in obj){
    if(key > max && obj[key].length > 0 && key != currentKey){
      max = key;
    }
  }
  if(max === -1){
    return null;
  }
  return max;
}


let findShorteningsPossibilities = (userAnswer) =>{

  let textVariants = {};
  const shortSybmols = ['’', '\'', '`', '"'];
  for (let i = 0; i<shortSybmols.length; i++){
    let reg = new RegExp(shortSybmols[i], 'g');
    userAnswer = userAnswer.replace(reg, '\'');
  }
  const words = userAnswer.split(' ');
  for(let i = 0; i<words.length; i++){
          // debugger;
    if(words[i].match(findShorteningRegExp)){

      for(let key in ShorteningDictionary){
        if(words[i].includes(ShorteningDictionary[key])){
          // debugger;
          var indexToPushInMain = i;
          if(!textVariants[indexToPushInMain]){
            textVariants[indexToPushInMain] = [];
          }
          if(findMaxPrevious(textVariants, i)){
            textVariants[findMaxPrevious(textVariants, i)].forEach((previousVariant)=>{
              let newVariant = [...previousVariant];
              newVariant[i] = previousVariant[i].replace(ShorteningDictionary[key], key);
              textVariants[indexToPushInMain].push(newVariant);
            })
          }else{
            let newVariant = [...words];
            newVariant[i] = words[i].replace(ShorteningDictionary[key], key);
            textVariants[indexToPushInMain].push(newVariant);
          }
        }
      }
    }
  }
// for one shortening.
  if(findMaxPrevious(textVariants, 999)){
    return textVariants[findMaxPrevious(textVariants, 999)].map((variant)=> variant.join(' '));
  }else{
    return [userAnswer];
  }

}

export const validateTextInBlank = (userAnswer, rightAnswers, questionText) =>{
  rightAnswers = [...rightAnswers, ...rightAnswers.map((rightAnswer)=> questionText.replace(/_+/g, rightAnswer))];
  const userAnswersPossibilities = findShorteningsPossibilities(userAnswer);
  return compareEachToEach(userAnswersPossibilities, rightAnswers);
}

export const validateMultiBlanks = (userAnswers, rightAnswers) => {
  let validIndexes = [];
  let isAllValid = false;
  if(userAnswers.length > rightAnswers.length){
    return {
      correct: true,
      correctIndexes: -1,
    }
  }
  for(let i = 0; i<userAnswers.length; i++){
    if(validateSimpleText(userAnswers[i], [rightAnswers[i]])){
      validIndexes.push(i);
    }
  }
  if(validIndexes.length === userAnswers.length){
    isAllValid = true;
  }
  return {
    correct: isAllValid,
    correctIndexes: validIndexes,
  }
}


const compareEachToEach = (userAnswers, rightAnswers) =>{
  for(let i =0; i<userAnswers.length; i++){
    for(let j = 0; j<rightAnswers.length; j++){
      if(compareTwo(userAnswers[i], rightAnswers[j])){
        return true;
      }
    }
  }
  return false;
}
// findShorteningsPossibilities('I`d been mad i"d I`d')
