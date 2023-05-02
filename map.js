const people= [{id:1, firstname:"hari",lastname:"haran"},
                {id:2, firstname:"udhaya",lastname:"kumar"},
                {id:3, firstname:"jai",lastname:"kishore"}];


let final = people.map(function(value){
       let fullname = [value.firstname,value.lastname].join(" ")
       let obj = {id:value.id,fullname:fullname}
       return obj;
});
console.log(final);

const dailyroutine = ["wakeup", "eat", "sleep"];

   dailyroutine.forEach(routine =>{
    console.log(routine);
   });