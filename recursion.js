/** product: calculate the product of an array of numbers. */

function product(nums) {
	if (nums.length === 0) return 1;
	return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
	if (words.length === 0) return 0;
	return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
	if (str.length === 0) return '';
	return str[0] + everyOther(str.slice(2));
}

// /** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
	if (str.length <= 1) return true;
	if (str[0] !== str[str.length - 1]) return false;
	return isPalindrome(str.slice(1, -1));
}

// /** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
	function _findIndex(arr, val, i = 0) {
		if (arr.length === 0) return -1;
		if (arr[i] === val) return i;
		if (i > arr.length) return -1;
		return _findIndex(arr, val, i + 1);
	}
	return _findIndex(arr, val, 0);
}

// /** revString: return a copy of a string, but in reverse. */

function revString(str) {
	if (str.length === 0) return '';
	return revString(str.slice(1)) + str[0];
}

// /** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
	let res = [];

	function _gatherStrings(obj, res = []) {
		for (let item of Object.values(obj)) {
			if (typeof item === 'string') {
				res.push(item);
			}
			if (typeof item === 'object') {
				_gatherStrings(item, res);
			}
		}
		return [ ...res ];
	}
	return _gatherStrings(obj, res);
}

// /** binarySearch: given a sorted array of numbers, and a value,
//  * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
	function _binarySearch(arr, val, i) {
		if (arr[i] === val) return i;
		if (arr.length === i) return -1;
		return _binarySearch(arr, val, i + 1);
	}
	return _binarySearch(arr, val, 0);
}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch
};
