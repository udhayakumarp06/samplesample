const arr = ["name","details","companyname","details","name","companydetails"];

function removeDuplicate(arr) {
    const result = [];
    let index = 0;
    const tmp = {};

    for (let i = 0; i < arr.length; i++) {
        if (!tmp[arr[i]]) {
            tmp[arr[i]] = 1;
            result[index] = arr[i];
            index++;
        } 
    }
    return result;
}

console.log(removeDuplicate(arr));