var debug = false;

$(document).ready(() => {
    new ClipboardJS('button');

    $('.input').on('input', () => {

        var sentence = $(".input").val() || ' ';

        var sentenceWordsAndPunctuation = sentence.match(/[\w']+|[^\w']+/g);

        var franklinVersionOfSentence = sentenceWordsAndPunctuation.map(word => {
            if (!isAWord(word))
                return word;

            try {
                var franklinWord = convertEnglishWordToFranklinWord(word.toUpperCase());

                if (wordIsCapitalized(word))
                    return capitalizeFranklinWord(franklinWord);

                return franklinWord;
            }
            catch (error) {
                if (error.message === `'${word.toUpperCase()}' is not in the CMU dictionary.`) {
                    console.error(error.message);
                    return word;
                } else
                    throw error;
            }
        }).join('');

        log(`Original sentence: ${sentence}`)
        log(`Franklin sentence: ${franklinVersionOfSentence}`);

        $('.output-text').text(franklinVersionOfSentence);
    });
});

function isAWord(string) {
    return /^[\w']+$/.test(string);
}

function wordIsCapitalized(word) {
    return word.charAt(0).toUpperCase() === word.charAt(0);
}

function capitalizeFranklinWord(franklinWord) {
    var firstLetterOfFranklinWord = franklinWord.charAt(0);
    var newFirstLetterOfFranklinWord = firstLetterOfFranklinWord;

    switch (firstLetterOfFranklinWord) {
        case 'ʃ':
            newFirstLetterOfFranklinWord = 'S';
            break;
        case 'ɑ':
            newFirstLetterOfFranklinWord = 'A';
            break;
        default:
            if (isANormalLetter(firstLetterOfFranklinWord))
                newFirstLetterOfFranklinWord = firstLetterOfFranklinWord.toUpperCase();
    }

    return newFirstLetterOfFranklinWord + franklinWord.slice(1);
}

function isANormalLetter(letter) {
    return /[a-z]/.test(letter);
}

function convertEnglishWordToFranklinWord(word) {

    var arpabetVersionOfWord = englishToArpabet[word]?.split(' ');
    if (!arpabetVersionOfWord)
        throw new Error(`'${word}' is not in the CMU dictionary.`);

    log(`Parsing: ${word}`);
    log(`Arpabet\t\tFranklin`);

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

        log(`${arpabetSound}\t\t${franklinLetter}`);
        return franklinLetter
    }).join('');

    log(`Result: ${franklinVersionOfWord}\n`);
    return franklinVersionOfWord;
}

function isLastItemOfArray(index, arrayLength) {
    return index + 1 === arrayLength;
}

function removeStressFromArpabetSound(string) {
    return string.slice(0, -1);
}

function log(text) {
    if (debug)
        console.log(text);
}