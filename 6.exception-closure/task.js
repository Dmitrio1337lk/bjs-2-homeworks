function parseCount(data) {
	if (isNaN(data)) {
		const dataError = new Error("Невалидное значение");
		throw dataError;	
	} else return Number.parseInt(data);
}

function validateCount(data) {
	try {
		return parseCount(data); 
	} catch (dataError) {
		return dataError;
	}
}

class Triangle {

	constructor(a,b,c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if ( (a + b < c) || (a + c < b ) || (b + c < a) ) {
			const triangleError = new Error("Треугольник с такими сторонами не существует");
			throw triangleError;
		} 
	}

	getPerimeter() {
		return this.a + this.b + this.c;
	}

	getArea() {
		let p = this.getPerimeter() / 2;
		return parseFloat((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
	}
}

function getTriangle(a,b,c) {
	try {
		return new Triangle(a,b,c);
	} catch (triangleError) {
		 let triError = {
			getArea() {
				return "Ошибка! Треугольник не существует";
			},
			getPerimeter() {
				return "Ошибка! Треугольник не существует";
			},
		}
		return triError
	}
}