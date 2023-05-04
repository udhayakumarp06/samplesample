function myfunc(loan,...expenses) {
 let total= expenses.reduce((a,b)=> a+b);
 return total - loan;
}
let result = myfunc(89,34,90,76,54,100);
console.log('the result is :₹',result);