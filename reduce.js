const donations =[45,23,85,96];

let total=donations.reduce(function(previousVal,currentVal)
{
    console.log("previous value", previousVal);
    console.log("current value", currentVal);
    
    return previousVal+currentVal;
}
);
console.log(total)


const shopping =[{ id:1,item:"milk",cost:45 },
{ id:2,item:"shoe",cost:1000 },
{ id:3,item:"cloths",cost:500 }];

let totalprice=shopping.reduce(function(previousVal,currentVal)
{
    console.log("previous value", previousVal);
    console.log("current value", currentVal);
    
    return previousVal+currentVal.cost;
},0);
console.log(totalprice)