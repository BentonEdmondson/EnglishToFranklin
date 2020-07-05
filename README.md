# EnglishToFranklin

## Sources

I used the rules outlined in the ['Benjamin Franklin's phonetic alphabet' Wikipedia article](https://en.wikipedia.org/wiki/Benjamin_Franklin%27s_phonetic_alphabet).

Additionally I used the primary source: ['A Reformed Mode of Spelling.' within Franklin's 'Political, Miscellaneous, and Philosophical Pieces'](https://archive.org/stream/politicalmiscell00franrich#page/466/mode/2up).

### Capitalization

Based on Franklin's examples, it appears that only old (e.g. 'b', 'i', etc) letters are capitalized. The exceptions are that, 'ʃ' (the 's' of the day) is capitalized when necessary and becomes 'S', and 'α' (the 'a' of the day) is capitalized when necessary and becomes an 'A'.

## Characters

Franklin's characters are shown [here](https://archive.org/stream/politicalmiscell00franrich#page/470/mode/2up). I primarily used the corresponding Unicode characters from the Wikipedia article mentioned above. But, I wanted each Franklin character to correspond with exactly one Unicode character. So, I used [this tool](https://qaz.wtf/u/convert.cgi) and [this document](http://www.unicode.org/Public/security/latest/confusables.txt) to find new characters whenever the Wikipedia article suggested using a combination of characters to create a Franklin character.

## English Parsing

First, the English words are sent through [Carnegie Mellon University's CMUdict](http://www.speech.cs.cmu.edu/cgi-bin/cmudict) to convert them to [ARPABET words](https://en.wikipedia.org/wiki/ARPABET).

Then, I manually created `ARPABETToFranklin.js`, which converts ARPABET sounds to Franklin characters. I did this using the content on the ['Benjamin Franklin's phonetic alphabet' Wikipedia article](https://en.wikipedia.org/wiki/Benjamin_Franklin%27s_phonetic_alphabet).