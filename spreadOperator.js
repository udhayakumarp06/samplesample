const shopping_items = ["maggi","shoe","cloths","paste"];
const additional_items =["phones","book"]

let total= [...additional_items,45,{name:"anbu"},...shopping_items];
console.log(total);