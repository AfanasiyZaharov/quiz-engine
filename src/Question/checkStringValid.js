import isEqual from 'lodash.isequal';

const excludeData = [
  "maria're",
  'maria"re',
  'maria`re',
];

const ShorteningDictionary = {
  'can not': `can't`,
  'cannot': `can't`,
  'will not': `won't`,
  ' is': `'s`,
  '\'s': `'s`,
  ' have': `'ve`,
  ' has': `'s`,
  ' would': `'d`,
  ' had': `'d`,
  ' are': `'re`,
  ' will': `'ll`,
  ' am': `'m`,
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



export const compareTwo = (userAnswer, rightAnswer) => {
  if (!userAnswer) {
    userAnswer = '';
  }
  let workedUserAnswer = prepareString(userAnswer);
  let workedRightAnswer = prepareString(rightAnswer);
  return workedUserAnswer === workedRightAnswer;
}


// make trim, remove dot on the end, lowercase, ...etc
const prepareString = (answer) => {
  return answer.toLowerCase().replace(/\.$/, '').replace(/ +/g, ' ').replace(/ $/, '').replace(/^ /, '').replace(/\.$/, '').replace(/\n$/, '');
}


export const validateSimpleText = (userAnswer, rightAnswers) => {
  let removePossibilities = false;
  if (excludeData.some((exclude) => prepareString(userAnswer).includes(prepareString(exclude)))) {
    removePossibilities = true;
  }
  let userAnswersPossibilities;
  if (!removePossibilities) {
    userAnswersPossibilities = findShorteningsPossibilities(userAnswer);
    console.log('userAnswer', userAnswersPossibilities);
  } else {
    userAnswersPossibilities = [userAnswer];
  }
  // console.log('validate simple', userAnswer, rightAnswers);
  // const userAnswersPossibilities = [userAnswer, prepareString(userAnswer), ...findShorteningsPossibilities(userAnswer)];
  // console.log('possi', userAnswersPossibilities);
  return compareEachToEach([...userAnswersPossibilities, userAnswer], rightAnswers);
}

export const checkMulti = (userAnswers, rightAnswers) => {
  let workedUserAnswers = userAnswers.sort().map((answer) => prepareString(answer));
  let workedRightAnswer = rightAnswers.sort().map((answer) => prepareString(answer));
  return isEqual(workedUserAnswers, workedRightAnswer);

}

const findMaxPrevious = (obj, currentKey) => {
  let max = -1;
  for (let key in obj) {
    if (Number(key) > Number(max) && obj[key].length > 0 && key != currentKey) {
      max = key;
    }
  }
  if (max === -1) {
    return null;
  }
  return max;
}


let findShorteningsPossibilities = (userAnswer) => {
  userAnswer = prepareString(userAnswer);
  let textVariants = {};
  const shortSybmols = ['’', '\'', '`', '"'];
  for (let i = 0; i < shortSybmols.length; i++) {
    let reg = new RegExp(shortSybmols[i], 'g');
    userAnswer = userAnswer.replace(reg, '\'');
  }
  const words = userAnswer.split(' ');
  for (let i = 0; i < words.length; i++) {

    if (words[i].match(findShorteningRegExp)) {
      for (let key in ShorteningDictionary) {
        if (words[i].includes(ShorteningDictionary[key])) {

          var indexToPushInMain = i;
          if (!textVariants[indexToPushInMain]) {
            textVariants[indexToPushInMain] = [];
          }
          if (findMaxPrevious(textVariants, i)) {
            textVariants[findMaxPrevious(textVariants, i)].forEach((previousVariant) => {
              let newVariant = [...previousVariant];
              newVariant[i] = previousVariant[i].replace(ShorteningDictionary[key], key);
              textVariants[indexToPushInMain].push(newVariant);
            })
          } else {
            let newVariant = [...words];
            newVariant[i] = words[i].replace(ShorteningDictionary[key], key);
            textVariants[indexToPushInMain].push(newVariant);
          }
        }
      }
    }
  }
  console.log('fdsfsd', textVariants, findMaxPrevious(textVariants, 999));
  // for one shortening.
  if (findMaxPrevious(textVariants, 999)) {
    return textVariants[findMaxPrevious(textVariants, 999)].map((variant) => variant.join(' '));
  } else {
    return [userAnswer];
  }

}

export const validateTextInBlank = (userAnswer, rightAnswers, questionText) => {
  rightAnswers = [...rightAnswers, ...rightAnswers.map((rightAnswer) => questionText.replace(/_+/g, rightAnswer))];
  let removePossibilities = false;
  console.log('ex', excludeData, userAnswer, prepareString(userAnswer));
  if (excludeData.some((exclude) => prepareString(userAnswer).includes(prepareString(exclude)))) {
    removePossibilities = true;
  }
  let userAnswersPossibilities;
  if (!removePossibilities) {
    userAnswersPossibilities = findShorteningsPossibilities(userAnswer);
  } else {
    userAnswersPossibilities = [];
  }
  // const userAnswersPossibilities = findShorteningsPossibilities(userAnswer);
  return compareEachToEach([...userAnswersPossibilities, userAnswer, prepareString(userAnswer)], rightAnswers);
}

export const validateMultiBlanks = (userAnswers, rightAnswers) => {
  console.log('user', userAnswers, rightAnswers);
  let validIndexes = [];
  let isAllValid = false;
  if (userAnswers.length > rightAnswers.length) {
    return {
      correct: true,
      correctIndexes: -1,
    }
  }

  if (rightAnswers.length % userAnswers.length > 0) {
    return {
      correct: true,
      correctIndexes: -1,
    }
  };

  let globalVA = {
    isOneTimeValid: false,
    validIndexes: [],
  }


  for (let i = 0; i < rightAnswers.length; i += userAnswers.length) {
    validIndexes = [];

    for (let j = 0; j < userAnswers.length; j++) {
      if (validateSimpleText(userAnswers[j], [rightAnswers[j + i]])) {
        validIndexes.push(j);
      }
    }
    if (validIndexes.length === userAnswers.length) {
      globalVA.isOneTimeValid = true;
      globalVA.validIndexes = validIndexes;
      break;
    } else {
      globalVA.validIndexes.push(...validIndexes);
    }
  }

  console.log('globalVa', globalVA);

  if (globalVA.isOneTimeValid) {
    return {
      correct: true,
      correctIndexes: validIndexes,
    }
  } else {
    const uniq = globalVA.validIndexes.filter((v, i, a) => a.indexOf(v) === i);
    if (uniq.length === userAnswers.length) {
      let uniqueUserAnswers = userAnswers.map((answer) => prepareString(answer)).filter((v, i, a) => a.indexOf(v) === i);
      if (uniqueUserAnswers.length === userAnswers.length) {
        return {
          correct: true,
          correctIndexes: validIndexes,
        }
      } else {
        return {
          correct: false,
          correctIndexes: [],
        }
      }
    } else {
      return {
        correct: false,
        correctIndexes: uniq,
      }
    }
  }

  // for(let i = 0; i<userAnswers.length; i++){
  //   if(validateSimpleText(userAnswers[i], [rightAnswers[i]])){
  //     validIndexes.push(i);
  //   }
  // }

  if (validIndexes.length === userAnswers.length) {
    isAllValid = true;
  }
  return {
    correct: isAllValid,
    correctIndexes: validIndexes,
  }
}


const compareEachToEach = (userAnswers, rightAnswers) => {
  for (let i = 0; i < userAnswers.length; i++) {
    for (let j = 0; j < rightAnswers.length; j++) {
      if (compareTwo(userAnswers[i], rightAnswers[j])) {
        return true;
      }
    }
  }
  return false;
}
// findShorteningsPossibilities('I`d been mad i"d I`d')
