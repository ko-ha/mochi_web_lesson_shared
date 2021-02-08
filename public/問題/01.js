/**
 * array1 にも array2 にもある値をだす
 * 長いのと短いの
 * */

const arr1 = [3, 5, 8, 29, 23, 34, 6, 2, 9, 2]
const arr2 = [1, 12, 12, 3, 5, 7, 2, 19, 19, 13, 9, 1, 2, 2]


function compare(a, b) {
  const result = []

  for (el of a) {
    if (b.indexOf(el) !== -1) result.push(el)
    // console.log(b.indexOf(el)) // bの中でelのインデックスをreturnする。ない場合は-1
  }

  return result
}

console.log(arr1.filter(x => arr2.includes(x))) //　shorthand書き方

console.log(compare(arr1, arr2))

