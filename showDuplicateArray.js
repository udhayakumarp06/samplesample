let array = ["Name", "Details", "CompanyName", "Details", "Name", "CompanyDetails"];
let index = 0, 
newArr = [];
const length = array.length; 
function findDuplicates(arr) {
   for (let i = 0; i < length - 1; i++) {
      for (let j = i + 1; j < length; j++) {
      if (arr[i] === arr[j]) {
            newArr[index] = arr[i];
            index++;
         }
      }
   }
   return newArr;
}
console.log(findDuplicates(array))
