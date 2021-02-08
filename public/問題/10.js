/**
 * パスワード生成
 * 
 */

const numberChars = "0123456789"
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerChars = "abcdefghijklmnopqrstuvwxyz"


function generatePassword (length, includeNumbers) {

}

console.log(generatePassword(8, false)) // 8桁の数字を含まないパスワードを生成
console.log(generatePassword(12, true)) // 12桁の数字を含むパスワードを生成

// hint
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random
