/**
 * 平均点出す系の問題
 * 
 * */

const kento = {
  name: 'kento iizuka',
  age: 20,
  points: {
    japanese: 20,
    english: 90,
    math: 80
  }
}

const mochi = {
  name: 'koharu mochida',
  age: 19,
  points: {
    japanese: 90,
    english: 30,
    math: 80
  }
}

function calc(person) {
  const { points, name, age } = person // object desrructuring https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

  const values = Object.values(points) // objectのvalueだけarrayにreturnする　Object.keys(), Object.entries()もある https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/values
  const total = values.reduce((a, b) => a + b, 0)
  const ave = total / values.length

  const txt = `${name}は${age}歳で、平均点は${Math.round(ave)}点です。` // Math.round https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/round
  return txt
}


console.log(calc(kento))
console.log(calc(mochi))
