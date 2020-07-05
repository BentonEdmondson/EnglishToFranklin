var arpabetToFranklin = require('./ARPABETToFranklin');
var englishToArpabet = require('./EnglishToARPABET.json');

var sentence = `The Obamanomics are fascinating.`;

var sentenceWordsAndPunctuation = sentence.match(/\w+|[^\w]+/g);

var franklinVersionOfSentence = sentenceWordsAndPunctuation.map(word => {
    if (!isAWord(word))
        return word;

    try {
        var franklinWord = convertEnglishWordToFranklinWord(word.toLowerCase());

        if (wordIsCapitalized(word))
            return capitalizeFranklinWord(franklinWord);

        return franklinWord;
    }
    catch (error) {
        if (error.message === `'${word.toLowerCase()}' is not in the CMU dictionary.`)
            return word;
        else
            throw error;
    }
}).join('');

console.log(`Original sentence: ${sentence}`)
console.log(`Franklin sentence: ${franklinVersionOfSentence}`);

function isAWord(string) {
    return /^\w+$/.test(string);
}

function wordIsCapitalized(word) {
    return word.charAt(0).toUpperCase() === word.charAt(0);
}

function capitalizeFranklinWord(franklinWord) {
    var firstLetterOfFranklinWord = franklinWord.charAt(0);

    if (firstLetterOfFranklinWord === 'ʃ')
        return 'S' + franklinWord.slice(1);

    if (firstLetterOfFranklinWord === 'α')
        return 'A' + franklinWord.slice(1);

    if (isANormalLetter(firstLetterOfFranklinWord))
        return firstLetterOfFranklinWord.toUpperCase() + franklinWord.slice(1);

    return franklinWord;
}

function isANormalLetter(letter) {
    return /[a-z]/.test(letter);
}

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