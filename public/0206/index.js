/* = = = = = = = = = = = = = = = = data types */
// number 数値
const number = 1;

// string 文字列
const string = "hello!";
const single = '"this" is';
const doub = "'this' is";
const escaping = '\'ashiduhafsudhfiauhds';
const back = `${string} world!`;

// boolean 真偽値
const sin = true;
const gi = false;

// array 配列
const array = [1, 2, 3];
const arraystring = ['hello', 'byebye'];

// object オブジェクト
const person = {
    firstName: 'Mochida',
    lastName: 'koharu',
    age: 19,
    grade: {
      japanese: 90,
      english: 90,
      math: 90
    }
}

// null ヌル
const nl = null

/* = = = = = = = = = = = = = = = = looping */
// while
let a = 1;
while (a <= 100) {
    a++;
} // increment++ | decrement--

// while (true) {
//   console.log('to the infinity and beyond');
//   break
// }

// for loop
for (let b = 1; b < 100; b++) {
    // console.log(b)
}

for (let i = 0; i < array.length; i++) {
  // console.log(array[i])
}

// for ... of → array
for (a of arraystring) {
  // console.log(a)
}

// for ... in → object
for (b in person) {
  // console.log(b + ' is ' + person[b])
}
// console.log(person.firstName, person['lastName']) object children yobidashi

/* = = = = = = = = = = = = = = = = function */
const c = () => {
    console.log('hello');
}

function cc() {
    console.log('hello');
}

// () => {} anonymous function

/* = = = = = = = = = = = = = = = = callback hell → promise */
function pro () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      print()
      resolve()
    }, 2000) // 1000ms = 1s
  })
}

function print () {
  console.log('lkent')
}

/* = = = = = = = = = = = = = = = = asynchronous function */
async function kento () {
  await pro()
  console.log('ima asynchronous function')
}

kento()


/* = = = = = = = = = = = = = = = = ec6 map, reduce, filter */
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const tmp = numArr.map((numArr2) => {
    return numArr2 * 2;
});
const tm = numArr.map(nu => nu * 2)
console.log(tmp, tm)

const rm = numArr.reduce((accumulator, current) => {
  return accumulator + current
}, 0)

const rmCool = numArr.reduce((a, b) => a + b, 0)

console.log(rm, rmCool / numArr.length)

const filtered = numArr.filter(fil => fil > 5);
console.log(filtered)
