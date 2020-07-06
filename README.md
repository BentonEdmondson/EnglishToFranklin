# English To Franklin's Phonetic Alphabet Converter

## Sources

I used the rules outlined in the ['Benjamin Franklin's phonetic alphabet' Wikipedia article](https://en.wikipedia.org/wiki/Benjamin_Franklin%27s_phonetic_alphabet).

Additionally I used the primary source: ['A Reformed Mode of Spelling.' within Franklin's 'Political, Miscellaneous, and Philosophical Pieces'](https://archive.org/stream/politicalmiscell00franrich#page/466/mode/2up).

### Inconsistencies With Examples

Sometimes, the output of this program is inconsistent with examples in the primary source. I have decided that I will stay loyal to the description on the Wikipedia page. This is because (a) I assume that pronunciations have evolved since Franklin's time, and that the Wikipedia authors took this into consideration. This would mean some that the spelling based on new pronunciations causes discrepancies with the old spellings based on old pronunciations. And (b) I don't want this project to devolve into a wild goose chase. 

TODO: add in talk about 'eer' only being on stress (although maybe don't do this), '~ei' thing only being 'e' not 'ee', and how 's' works at the end of works

### Capitalization

The author of 'A Reformed Mode of Spelling.' says, regarding capital letters, "I should have provided for them by means of larger types, but the form of some of them would have made them too large for the page". So, only old (e.g. 'b', 'i', etc) letters are capitalized in that work, and I have not found the capitilized versions of the new letters. As such, only old letters are capitalized. In addition, 'ʃ' (the 's' of the day) is capitalized when necessary and becomes 'S', 'ɑ' (the 'a' of the day) is capitalized when necessary and becomes an 'A', and 'ƒ' (the 'f' of the day) is capitalized when necesssary and becomes an 'F'.

## Characters

Franklin's characters are shown [here](https://archive.org/stream/politicalmiscell00franrich#page/470/mode/2up). I primarily used the corresponding Unicode characters from the Wikipedia article mentioned above. But, I wanted each Franklin character to correspond with exactly one Unicode character. So, I used [this tool](https://qaz.wtf/u/convert.cgi), [this tool](http://xahlee.info/comp/unicode_index.html) and [this document](http://www.unicode.org/Public/security/latest/confusables.txt) to find new characters whenever the Wikipedia article suggested using a combination of characters to create a Franklin character.

## English Parsing

First, the English words are sent through [Carnegie Mellon University's CMUdict](http://www.speech.cs.cmu.edu/cgi-bin/cmudict) to convert them to [ARPABET words](https://en.wikipedia.org/wiki/ARPABET).

Then, I manually created `ARPABETToFranklin.js`, which converts ARPABET sounds to Franklin characters. I did this using the content on the ['Benjamin Franklin's phonetic alphabet' Wikipedia article](https://en.wikipedia.org/wiki/Benjamin_Franklin%27s_phonetic_alphabet).