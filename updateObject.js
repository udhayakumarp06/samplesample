 var object = {"full_name":{first_name:"udhaya",
                             last_name:"kumar"},
                            age:24,
                             place:"CBE"};
    object.full_name.first_name = "ragul"
    delete object.age;
    let contact_number = 234;
    let myobject = {...object,contact_number};
    console.log(object.full_name);  
    console.log(object);
    console.log(myobject)
;