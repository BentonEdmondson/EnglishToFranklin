module.exports = {
    // sources for examples are here unless otherwise noted: https://en.wikipedia.org/wiki/ARPABET

    // oʊ - b{oa}t
    "OW": "o",

    // ɔː - cl{o}th https://teflpedia.com/Phoneme_/%C9%94%CB%90/_in_General_American#:~:text=Some%20common%20words%20containing%20%2F%C9%94%CB%90,soft%2C%20song%2C%20strong%2C%20wrong
    "AO": "cɩ",
    // ɒ - st{o}p https://teflpedia.com/IPA_phoneme_/%C9%92/
    "AA": "cɩ",

    // æ - b{a}t
    "AE": "a",

    // ɛ - b{e}t
    "EH": "e",
    // "sometimes" eɪ - b{ai}t
    //"EY": "e", this results in 'let' and 'late' being indistinguishable so, as you can see below, 'EY' becomes 'ee'

    // ɪ - b{i}t
    "IH": "i",
    // j - {y}acht
    "Y": "i",
    // unstressed (hence the '0') i - happ{y} https://teflpedia.com/IPA_phoneme_/i%CB%90/
    "IY0": "i",

    // ʊ - b{oo}k
    "UH": "u",
    // uː - f{oo}d https://teflpedia.com/IPA_phoneme_/u%CB%90/
    "UW": "u",
    // w = {w}ise
    "W": "u",

    // ʌ - b{u}tt
    "AH": "ɥ",

    // standard consonants
    "HH": "h",
    "G": "g",
    "K": "k",

    // ʃ - {sh}y
    "SH": "ի",

    // ŋ - si{ng}
    "NG": "ŋ",

    // standard consonants
    "N": "n",
    "R": "r",
    "T": "t",
    "D": "d",
    "L": "l",

    // s - {s}igh
    "S": "ʃ",
    "word ends with S": "s",

    // standard consonant
    "Z": "z",

    // θ - {th}igh
    "TH": "ⱨ",

    // ð - {th}y
    "DH": "ˇh̢ ",

    // standard consonants
    "F": "f",
    "V": "v",
    "B": "b",
    "P": "p",
    "M": "m",

    // the above comes from en.wikipedia.org/wiki/Benjamin_Franklin%27s_phonetic_alphabet under 'Franklin's proposed phonetic alphabet'"
    // the below come from the same page under 'Other English phonemes are represented as follows:'"

    // hw - {wh}y, unfortunately the CMU dictionary doesn't use WH at all, so this won't work.
    "WH": "hu",

    // aɪ - b{i}te
    "AY": "ɥi",

    // aʊ - m{ou}th https://teflpedia.com/IPA_phoneme_/a%CA%8A/
    "AW": "cɩu",

    // dʒ - {j}et
    "JH": "dի",

    // "ee or e" eɪ - b{ai}t
    "EY": "ee",

    // ɛər - c{are}, th{eir} TODO: look into this one a bit more
    "EH R": "eer",

    // ɜːr, ər - conc{er}n https://teflpedia.com/IPA_phoneme_/%C9%9C%CB%90/#Common_words
    "ER1": "ɥr",

    // "ii or i" i - b{ea}t
    "IY1": "ii",

    // ɔɪ - b{oy}
    "OY": "cɩɥi",

    // ɔːr - f{or}get
    "ER0": "cɩr",

    // oʊr - c{our}se
    "AO R": "or",

    // tʃ - {Ch}ina
    "CH": "tի",

    // ʒ - mea{s}ure
    "ZH": "zի"

    // There are certain inconsistencies with the Wikipedia page that, I believe, are caused by the IPA to ARPABET conversion. E.g., they say "measure -> mezիɥr" and "forget -> fcɩrget", but given my CMU dictionary, it is impossible for me to distinguish between the 'er' sounds in each word. So, I decided to set stressed 'er' as the 'ɥr' one because they say "learn -> lɥrn"
};