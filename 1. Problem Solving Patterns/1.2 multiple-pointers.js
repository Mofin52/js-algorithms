const countUniqueValues = (arr) => {
	if(arr.length === 0) return 0;
	
  let left = 0;
  let right = 1;
	
  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    } else {
      right++;
    }
  }

  return left === 0 && right === arr.length ? 0 : left + 1;
};

module.exports = countUniqueValues;
