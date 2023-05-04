var cars1 =["audi","BMW","BENZ","RR"]
var cars2= cars1;
console.log(cars1);
console.log(cars2);
cars2[0] = "Hyundai"
console.log(cars1);
console.log(cars2);


var obj1 ={
    name:"kumar",
    age:24,
    mark:90
}
var obj2 =obj1;
obj2.name = "udhaya";
console.log(obj1);
console.log(obj2);

///////////////using spread operator(can not affect another object)


//  var obj2 ={...obj1};
//  obj2.name = "udhaya";
//  console.log(obj1);
//  console.log(obj2);