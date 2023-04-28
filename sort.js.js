
const students =[3,1,8,2];
//sort
students.sort();
console.log(students);
students.sort(function(a,b){
return b-a;
});
console.log(students);

const objectlist= [
    {id : 3, name : "senthil"},
    {id : 8, name : "guna"},
    {id : 1, name : "anbu"}
    ];
    objectlist.sort(function(a,b)
    {
        if(a.name < b.name) return -1;

        if(a.name < b.name) return -1;

        return 0;
    }); 

     console.log(objectlist);