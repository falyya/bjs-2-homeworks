function parseCount(count) {
	const number = Number.parseFloat(count);
	if (isNaN(number) === true) {
		throw new Error("Невалидное значение");
	}
	return number;
}

function validateCount(count) {
	try {
		parseCount(count);
	} catch (error) {
		console.log(error);
	}
}

class Triangle {
	constructor(a, b, c) {
		if (a + b < c || a + c < b || b + c < a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.a = a;
		this.b = b;
		this.c = c;

	}

	getPerimeter() {
		return this.a + this.b + this.c;
	}

	getArea() {
		const s = this.getPerimeter() / 2;
		return Number(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			getPerimeter() {
				return "Ошибка! Треугольник не существует";
			},
			getArea() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}