function multiplyNumbers (...numbers) 
{
    if (numbers.length === 0) return 0;
    return numbers.reduce((product, num) => product * num, 1);
}

console.log("The Result of the Multiplication is ", multiplyNumbers(4,5,7));
console.log("The Result of the Multiplication is ", multiplyNumbers(8,2,4));
console.log("The Result of the Multiplication is ", multiplyNumbers(9,5,9));
console.log("The Result of the Multiplication is ", multiplyNumbers(3,3,3));