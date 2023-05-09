const numbers = [1, 2, 3]; 
numbers.push(4); // no error

numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; 