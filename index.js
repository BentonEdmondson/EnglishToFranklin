var arpabetToFranklin = require('./ARPABETToFranklin');
var englishToArpabet = require('./EnglishToARPABET.json');

var word = 'agriculturalist';
console.log(`Word: ${word}`);


var arpabetVersionOfWord = englishToArpabet[word]?.split(' ');
if (arpabetVersionOfWord === undefined)
    throw new Error(`${word} is not in the CMU dictionary.`);

console.log(`Arpabet: ${arpabetVersionOfWord}`);

var franklinVersionOfWord = arpabetVersionOfWord.map((arpabetSound, i) => {
    var franklinLetter = undefined;
    if (isLastItemOfArray(i, arpabetVersionOfWord.length) && arpabetSound === 'S') {
        franklinLetter = 's'
    }

    if (removeStressFromArpabetSound(arpabetSound) === 'EH' && arpabetVersionOfWord[i + 1] === 'R') {
        franklinLetter = 'eer';
        arpabetVersionOfWord[i + 1] = '';
    }

    if (franklinLetter === undefined) {
        franklinLetter = arpabetToFranklin[arpabetSound];
    }

    if (franklinLetter === undefined) {
        franklinLetter = arpabetToFranklin[removeStressFromArpabetSound(arpabetSound)];
    }

    if (franklinLetter === undefined)
        throw new Error(`Couldn't find a Franklin letter for ${arpabetSound}`);

    return franklinLetter
}).join('');

console.log(`Franklin word: ${franklinVersionOfWord}`);

// I don't know why I can't use arrow notation for these, but alas
function isLastItemOfArray(index, arrayLength) {
    return index + 1 === arrayLength;
}

function removeStressFromArpabetSound(string) {
    return string.slice(0, -1);
}