//1.object Literal
let o1= {};
let o2 ={name:"kumar"}
let o3 = {
    name:"udhaya",
    show: function(){
        return this.name;
    }
}
console.log(o1)
console.log(o2.name)
console.log(o3.show())

//2.create() method
 let car ={
    model:"BMW",
    color:"blue"
 }
 let final = Object.create(car);
 console.log(final.model)
 // .constructor

 function person1(first,last,gender,place){
    this.first_name = first;
    this.last_name = last;
    this.genderr = gender;
    this.region = place;
 }

 const list = new person1("udhaya","kumar","male","CBE");
 console.log(list);

 //object constructor

 const person = new Object();
 person.first_name = "udhaya";
 person.last_name = "kumar";
 person.age = 24;
 person.nationality = "Indian"

 console.log("my name is "+ person.first_name);

 //function constructor with prototype

 function person2(){}
   person2.prototype.name = "ragul"
 

 let object1= new person2();
 console.log(object1.name);

 //ES6 class

 class person3{
    constructor(name){
       this.name = name;
 }
}
 let object2 = new person3("kumar")
 console.log(object2.name);

 // singleton pattern

 let object3 = new function(){
    this.name = "udhaya";
 };
 console.log(object3.name);