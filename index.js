var arpabetToFranklin = require('./ARPABETToFranklin');
var englishToArpabet = require('./EnglishToARPABET.json');

var sentence = `I want to be a juror on a rural brewery robbery case.`;

var sentenceWordsAndPunctuation = sentence.match(/\w+|[^\w]+/g);

var franklinVersionOfSentence = sentenceWordsAndPunctuation.map(string => {
    try {
        return convertEnglishWordToFranklinWord(string.toLowerCase());
    }
    catch (error) {
        if (error.message === `'${string}' is not in the CMU dictionary.`)
            return string;
        else
            throw error;
    }
}).join('');

console.log(`Original sentence: ${sentence}`)
console.log(`Franklin sentence: ${franklinVersionOfSentence}`);

function convertEnglishWordToFranklinWord(word) {

    var arpabetVersionOfWord = englishToArpabet[word]?.split(' ');
    if (!arpabetVersionOfWord)
        throw new Error(`'${word}' is not in the CMU dictionary.`);

    console.log(`Parsing: ${word}`);
    console.log(`Arpabet\t\tFranklin`);

    var franklinVersionOfWord = arpabetVersionOfWord.map((arpabetSound, i) => {
        var franklinLetter;

        if (isLastItemOfArray(i, arpabetVersionOfWord.length) && arpabetSound === 'S')
            franklinLetter = 's'

        if (removeStressFromArpabetSound(arpabetSound) === 'EH' && arpabetVersionOfWord[i + 1] === 'R')
            franklinLetter = 'ee';

        if (!franklinLetter)
            franklinLetter = arpabetToFranklin[arpabetSound];

        if (!franklinLetter)
            franklinLetter = arpabetToFranklin[removeStressFromArpabetSound(arpabetSound)];

        if (!franklinLetter)
            throw new Error(`Couldn't find a Franklin letter for ${arpabetSound}`);

        console.log(`${arpabetSound}\t\t${franklinLetter}`);
        return franklinLetter
    }).join('');

    console.log(`result: ${franklinVersionOfWord}\n`);
    return franklinVersionOfWord;
}

// I don't know why I can't use arrow notation for these, but alas
function isLastItemOfArray(index, arrayLength) {
    return index + 1 === arrayLength;
}

function removeStressFromArpabetSound(string) {
    return string.slice(0, -1);
}