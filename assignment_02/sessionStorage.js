//========STORING OBJECTS IN SESSION STORAGE========

/*
Same for session storage convert object into
 string and then parse it backt to obj
*/

const stdObj1 = {
  name: "Taimoor khan",
  age: "21",
  city: "Karachi",
};

sessionStorage.setItem("std1", JSON.stringify(stdObj));

const getItem1 = JSON.parse(sessionStorage.getItem("std1"));
console.log(getItem);
console.log(getItem.name);
console.log(getItem.age);
console.log(getItem.city);
