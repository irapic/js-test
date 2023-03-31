	let form = prompt ('Выберите фигуру: 1-квадрат, 2-круг');

	if (form == 1) {
      let size = prompt ('Выберите размер квадрата');
      let x = prompt ('Введите координаты оси Х');
      let y = prompt ('Введите координаты оси У');
      drawRect(x, y, size, size, 'black');
    } 
	else if (form == 2) {
      let radius = prompt ('Выберите радиус круга');
      let x = prompt ('Введите координаты оси Х');
      let y = prompt ('Введите координаты оси У');
      drawCircle(x, y, radius, 'black');
    }
