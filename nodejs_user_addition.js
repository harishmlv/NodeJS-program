// Addition of Two Numbers.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var a,b,c;
rl.question('Enter the first number: ', (num1) => {
     a = parseInt(num1);
rl.question('Enter the second number: ', (num2) => {
    b = parseInt(num2);

    rl.close();
    
    c = a+b;
    console.log("Sum of First and Second Number = "+c);
});
});

/**ChatGPT

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
  rl.question('Enter the second number: ', (num2) => {
    const num1Parsed = +num1;
    const num2Parsed = +num2;

    // Check if both inputs are valid numbers, otherwise default to NaN
    const result = num1Parsed + num2Parsed || 'Invalid input. Please enter valid numbers.';
    console.log(`The sum is: ${result}`);

    rl.close();
  });
});

 */