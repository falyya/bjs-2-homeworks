"use strict";
function solveEquation(a, b, c) {
	let arr = [];
	arr.push(Math.pow(b, 2) - 4 * a * c);
	if (arr[0] < 0) {
		arr.pop();
	} else if (arr[0] === 0) {
		arr.pop();
		arr.push((b * (-1)) / (2 * a));
	} else if (arr[0] > 0) {
		arr.push((b * (-1) + Math.sqrt(arr[0])) / (2 * a));
		arr.push((b * (-1) - Math.sqrt(arr[0])) / (2 * a));
		arr.splice(0, 1);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let paymentAmount = 0;

	percent = (percent * 0.01) / 12;
	let paymentBody = amount - contribution;

	let payment = paymentBody * (percent + (percent / (Math.pow(1 + percent, countMonths) - 1)));
	
  for (let i = 0; i < countMonths; i++) {
		paymentAmount = paymentAmount + payment;
	}
	paymentAmount = +paymentAmount.toFixed(2);

	return paymentAmount;
}