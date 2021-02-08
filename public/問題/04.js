/**
 * if if else else
 * 
 * if elseの他に途中にelse if を入れて更に条件分岐ができる
 * これがつながってる限り1つのもの
 */


function weatherForecast(type) {
  if (type === 'sunny') {
    console.log('天気は晴れです')
  } else if (type === 'rainy') {
    console.log('天気は雨です')
  } else {
    console.log('sunnyかrainyを入力してくれ')
  }
}

weatherForecast('sunny')
weatherForecast('rainy')
weatherForecast('cloudy')

// これは別々の例
function rei(x) {
  if (x === 'sunny') {
    console.log('天気は晴れです')
  }

  if (x === 'rainy') {
    console.log('天気は雨です')
  }

  console.log('これらすべての条件が検証される。else if でつながってたら1つのまとまりとして検証される')
}
