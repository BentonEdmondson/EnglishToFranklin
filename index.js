var arpabetToFranklin = require('./ARPABETToFranklin.json');
var englishToArpabet = require('./EnglishToARPABET.json');

var word = 'command';
console.log(`Word: ${word}`);

// TODO: update nodejs and add the '?'   vvv here
var arpabetOfWord = englishToArpabet[word].split(' ');
console.log(`Arpabet: ${arpabetOfWord}`);

var franklinLettersOfWord = arpabetOfWord.map((arpabetSound, i) => {
    var franklinLetter = undefined;
    if (isLastItemOfArray(i, arpabetOfWord.length)) {
        franklinLetter = arpabetToFranklin[`word ends with ${arpabetSound}`];
        console.log(`Franklin letter as last letter of string: ${`word ends with ${arpabetSound}`}`);
        console.log(`Result: ${franklinLetter}\n\n`);
    }

    if (!franklinLetter) {
        franklinLetter = arpabetToFranklin[arpabetSound];
        //console.log(`Normal arpabet sound: ${arpabetSound}`);
        //console.log(`Result: ${franklinLetter}\n\n`);

    }

    if (!franklinLetter) {
        franklinLetter = arpabetToFranklin[removeLastCharFromString(arpabetSound)];
        //console.log(`Arpabet sound without last letter: ${removeLastCharFromString(arpabetSound)}`);
        //console.log(`Result: ${franklinLetter}\n\n`);

    }

    return franklinLetter
});

console.log(`Franklin word: ${franklinLettersOfWord.join('')}`);

// I don't know why this needs to be like this but the following function doesn't
function isLastItemOfArray(index, arrayLength) {
    return index + 1 === arrayLength;
}

function removeLastCharFromString(string) {
    return string.slice(0, -1);
}