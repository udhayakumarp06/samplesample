const age =[24,50,18,12]
let results= age.filter(function(value){
    return value>=18;
});
console.log(results);

const numbers =[2,4,7,9,10]
let evennumbers = numbers.filter(function(value){
    return value %2==0;
});
console.log(evennumbers);

const items =[
    {items:"iphone", cost:16700},
    {items:"andriod", cost:9500},
    {items:"windows", cost:10200}
];
listitems=items.filter(function(value)
{
    return value.cost<=12000;
});
console.log(listitems);