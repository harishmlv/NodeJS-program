// file for import user_define_module1.js

var calc = require("./user_define_module1.js");

var k = calc.sum(5,8);
console.log("Sum is = "+k);

var m = calc.multi(10,5);
console.log("Multi = "+m);

var r = calc.evenOdd(7);
console.log(r);