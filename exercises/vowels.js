/*write a function that sorts an array of strings based on the number of vowels they contain */

function sortByVowel(list) {
  var sorted = [];

  list.forEach(str => {
    sorted.push({ word: str, count: countVowels(str) });
  });

  sorted.sort((a, b) => a.count - b.count);

  sorted = sorted.map(item => item.word);

  return sorted;

  function countVowels(str) {
    let vowels = "aeiouyAEIOUY";
    let count = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
}

console.log(sortByVowel(['Alice', 'Bob', 'Mallory']));

// another implementation option 

function countVowels(str) {
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

function sortStringsByVowels(arr) {
  return arr.sort((a, b) => countVowels(b) - countVowels(a));
}

const strings = ["apple", "banana", "pear", "orange", "grape"];

console.log(sortStringsByVowels(strings));
