function getArrayParams(...arr) {
	let min = (values) => values.reduce((x, y) => Math.min(x, y));
	let max = (values) => values.reduce((x, y) => Math.max(x, y));
	let avg = (values) => values.reduce((x, y) => x + y) / values.length;
	let result = {
		min: min(arr),
		max: max(arr),
		avg: +avg(arr).toFixed(2)
	}

	return result;
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let avg = (value) => value.reduce((x, y) => x + y);
	return avg(arr);
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let min = (values) => values.reduce((x, y) => Math.min(x, y));
	let max = (values) => values.reduce((x, y) => Math.max(x, y));
	let result = max(arr) - min(arr);

	return result;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
}


function makeWork(arrOfArr, func) {
	let MaxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > MaxWorkerResult) {
			MaxWorkerResult = result;
		}
	}
	return MaxWorkerResult
}