const names = ["john", "jane", "doe"];

const capitalizedNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));

console.log(capitalizedNames); // Output: ["John", "Jane", "Doe"]
