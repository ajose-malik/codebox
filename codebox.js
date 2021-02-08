function validAnagram(str1, str2) {
	// add whatever parameters you deem necessary - good luck!
	if (str1.length !== str2.length) {
		return false;
	}

	let result;
	for (let char of str1) {
		if (str2.includes(char)) {
			str2.replace(char, '');
			result = true;
		} else {
			result = false;
		}
	}
	return result;
}

console.log(validAnagram('xcxsf', 'cfsss'));
