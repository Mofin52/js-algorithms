const maxSubArraySum = (arr, subArrayLength) => {
	let maxSum = 0;
	let tempSum = 0;

	if(arr.length < subArrayLength) return null;

	for(let i = 0; i < subArrayLength; i++) {
		maxSum += arr[i];
	};

	tempSum = maxSum;

	for(let i = subArrayLength; i < arr.length; i++) {
		tempSum = tempSum - arr[i - subArrayLength] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}

	return maxSum;

};

module.exports = maxSubArraySum;
