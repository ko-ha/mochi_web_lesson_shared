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

// ここからこはるです。２つの配列を比較しないといけない、(比較の仕方は検索しないとわからない)
// 2つを連結して1つの配列を作りその要素の重複を調べればいいと思ったけど元の同じ配列内で重複していても区別できないからだめね
//.includes()の対象にarr1を指定して、含まれているか調べる特定の要素としてarr2の要素を指定すればいけるかも
// let b = arr2[i];
// let i = 0; i < arr2.length; i++  //繰り返す？
// let a = arr1.includes(arr2[i]);  
// .includes()はbooleanでかえってきちゃうから、その時のiの値がわからないと値を取り出せない
// 含まれる(true)ならarr2[i]を表示させる、ここまでを一連の繰り返し作業とするのか！

const arr1 = [3, 5, 8, 29, 23, 34, 6, 2, 9, 2];
const arr2 = [1, 12, 12, 3, 5, 7, 2, 19, 19, 13, 9, 1, 2, 2];

function commonValues (arry) {
    for (let i = 0; i < arr2.length; i++) {
        let b = arr2[i];
        let a = arry.includes(b);
        if (a === true) {
            console.log(b);
        }
    }    
}
commonValues(arr1);
//問題：2が2回でてきてまう
