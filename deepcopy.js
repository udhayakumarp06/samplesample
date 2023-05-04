var a = 10;
var b=a; //deep copy 
console.log(a);
console.log(b);
b=20;
console.log(a);
console.log(b);

var c = "hello";
var d =c;
console.log(c);
console.log(d);
d= "hi";
console.log(c);
console.log(d);

var c = true;
var d =c;
console.log(c);
console.log(d);
d= false;
console.log(c);
console.log(d);