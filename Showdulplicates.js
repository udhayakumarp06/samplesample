const arr =[{name:"udhaya",company:"chimera"},
{name:"abc",company:"chimera"},//duplicate company name
{name:"kumar",company:"Bosch"},
{name:"kumar",company:"TCS"},//duplicate name
{name:"abc",company:"cts"}];//duplicate name
const ids={};
const dups=[];
arr.forEach((val)=>{
    (ids[val.name])?(dups.push(val)):(ids[val.name] = true);
    (ids[val.company])?(dups.push(val)):(ids[val.company]= true);
})
console.log(dups);