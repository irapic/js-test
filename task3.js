let summa = parseInt(prompt('Введите сумму вклада'))
let rate = parseInt(prompt('Введите процентную ставку'))
let months = parseInt(prompt('Введите количество месяцев'))

let n = 1 
let result = summa

while (n <= months) {
  result = result + result * (rate/100/12)
  n = n + 1
}

result = result - summa
console.log('доход равен ' + result)
  