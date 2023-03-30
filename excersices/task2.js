let year = prompt('Введите год Вашего рождения')

let check1 = year % 4
let check2 = year % 100
let check3 = year % 400

if ((check1 == 0 && check2 != 0) || check3 == 0) {
  console.log('Год високосный') 
} else {
	 console.log('Год невисокосный')
}