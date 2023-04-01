	let userInput = prompt('Введите цены товаров через запятую');
	let array = userInput.split(',');
	let prices = array.map(
		function (element) {
			return parseInt(element);
		}
	);
	let height = prompt('Введите высоту графика');

	let summa = 0;
	for (let i = 0; i < prices.length; i++) {
        summa = summa + prices[i];
    }

	console.log('Cумма ваших покупок ' + summa + ' рублей');

	let prev = [0, height];
	for (let i = 0; i < prices.length; i++) {
	let current = [i * 10, 200 - prices[i]];
	drawLine(prev[0], prev[1], current[0], current[1]);
	prev = current;
	}