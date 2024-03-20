// User Input = Name

const readline = require('readline');

// Create an interface to read input and output streams
const rl = readline.createInterface({
  input: process.stdin, // Read from the standard input (command-line)
  output: process.stdout // Output to the standard output (command-line)
});

// Prompt the user for input
var uname;
rl.question('What is your name? ', (name) => {

    uname = name;  
    console.log("Welcome "+uname);

});
