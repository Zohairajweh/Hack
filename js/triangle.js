
// Triangular Number Sequence


// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15. Write a function that converts n number of places with its corresponding number


function triangle(n) {
	var b = [0]
	for (let i = 1; i <= n; i++)
		{
			b.push(i+b[i-1]);
		}
	return b[n];
}
console.log(triangle);