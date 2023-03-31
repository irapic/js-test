	function rect(ots,step,l) {

	let y;
	let x;
	let color = 'black';

	for(y = 1; y <= 2; y++){

	for(x = 1; x <= 2; x++){

  drawRect((x*step)+ots, y+ots, 4, l, color);
  drawRect(x+ots, (y * step)+ots, l, 4, color);
	}
	}
	}

	rect(0,150, 450);
	rect(75, 150/1.5, 450/1.5);
	rect(150, 150/3, 450/3);