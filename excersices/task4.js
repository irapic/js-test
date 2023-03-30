
	function procent(summa, months, rate, result0) {
      if (months == 0) 
        return result0;
      else {
        let result = result0 + result0 * (rate / 100 / 12);
        return procent(summa, months-1, rate, result);
      }
    }  

// Start of proframm
	let summa = parseInt(prompt('Введите сумму вклада'))
	let rate = parseInt(prompt('Введите процентную ставку'))
	let months = parseInt(prompt('Введите количество месяцев'))
	let result0 = summa
	let result = procent(summa, months, rate, result0) - summa;
	console.log('доход ' + result.toFixed(2));
