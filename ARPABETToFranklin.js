var arpabetToFranklin = {

    // sources for examples are here unless otherwise noted: https://en.wikipedia.org/wiki/ARPABET

    // oʊ - b{oa}t
    "OW": "o",

    // candidates for this block's letter: Ɋ ѻ ꜵ 𝓸 cɩ ᶐ ɋ գ 𝔬 (it is the leftmost letter here: https://upload.wikimedia.org/wikipedia/commons/6/6b/Franklin%27s_extra_letters.jpg)
    // ɔː - cl{o}th https://teflpedia.com/Phoneme_/%C9%94%CB%90/_in_General_American#:~:text=Some%20common%20words%20containing%20%2F%C9%94%CB%90,soft%2C%20song%2C%20strong%2C%20wrong
    "AO": "ɋ",
    // ɒ - st{o}p https://teflpedia.com/IPA_phoneme_/%C9%92/
    "AA": "ɋ",

    // æ - b{a}t
    "AE": "ɑ",

    // ɛ - b{e}t
    "EH": "e",
    // "sometimes" eɪ - b{ai}t
    //"EY": "e", this results in 'let' and 'late' being indistinguishable so, as you can see below, 'EY' becomes 'ee', (they say it could be 'ee' or 'e', but because of the above reasoning I am setting it to 'ee')

    // ɪ - b{i}t
    "IH": "i",
    // j - {y}acht
    "Y": "i",
    // unstressed (thus below IY1 is defined) i - happ{y} https://teflpedia.com/IPA_phoneme_/i%CB%90/
    "IY": "i",

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
    //"word ends with S": "s", hardcoded in `index.js`

    // standard consonant
    "Z": "z",

    // θ - {th}igh
    "TH": "ⱨ",

    // candidates: ˇⱨ 𝔥 ђ
    // ð - {th}y
    "DH": "ђ",

    // standard consonants
    "F": "f",
    "V": "v",
    "B": "b",
    "P": "p",
    "M": "m",

    // the above comes from https://en.wikipedia.org/wiki/Benjamin_Franklin%27s_phonetic_alphabet under 'Franklin's proposed phonetic alphabet'"
    // the below come from the same page under 'Other English phonemes are represented as follows:'"

    // hw - {wh}y, unfortunately the CMU dictionary doesn't use WH at all, so this won't work.
    "WH": "hu",

    // aɪ - b{i}te
    "AY": "ɥi",

    // aʊ - m{ou}th https://teflpedia.com/IPA_phoneme_/a%CA%8A/
    "AW": "ɋu",

    // dʒ - {j}et
    "JH": "dի",

    // "ee or e" eɪ - b{ai}t
    "EY": "ee",

    // ɛər - pr{ayer} p{air} https://teflpedia.com/IPA_phoneme_/e%C9%99/#.2Fe.C9.99r.2F_vs_.2Fe.C9.AA.C9.99r.2F
    //"EH R": "eer", hardcoded in `index.js`

    // ɜːr, ər - comput{er} https://teflpedia.com/IPA_phoneme_/%C9%99/#.2F.C9.99r.2F
    "ER": "ɥr",

    // "ii or i" i - b{ea}t
    "IY1": "ii",

    // ɔɪ - b{oy}
    "OY": "ɋɥi",

    // ɔːr - aff{or}d
    //"AO R": "ɋr", this one works on its own

    // oʊr - {or}ion
    //"OW R": "or", this one also works on its own

    // tʃ - {Ch}ina
    "CH": "tի",

    // ʒ - mea{s}ure
    "ZH": "zի",
};