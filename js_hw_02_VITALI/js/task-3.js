
const findLongestWord = function(string) {
    let words = string.split(' ');
    let longest = '';
        for (let i = 0; i < words.length; i++) {
          if (words[i].length > longest.length) {
            longest = words[i];
          }
        }
        return longest;
    }

  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  console.log(findLongestWord('Google do a roll')); // 'Google'
  console.log(findLongestWord('May the force be with you')); // 'force'





//   Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром 
// произвольную строку (в строке будут только слова и пробелы)
//  и возвращает самое длинное слово в этой строке.