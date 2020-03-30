// Array of Multiples

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

  function arrayOfMultiples (num, length) {
		var arr = [];
	for (let i = 1; i <= length; i++)
		{
			arr.push(i*num);
		}
	return arr;
}
console.log(arrayOfMultiples)

