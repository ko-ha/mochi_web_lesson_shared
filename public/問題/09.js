/**
 * "The quick brown fox jumps over the lazy dog" => "dog lazy the over jumps fox brown quick The"
 * のように単語で区切ってひっくり返して
 * 
 */

// HINT!!
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join

const txt = "The quick brown fox jumps over the lazy dog"
const txt2 = "A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this"

function changeOrder(x) {
  return x
}

console.log(changeOrder(txt))
console.log(changeOrder(txt2))
