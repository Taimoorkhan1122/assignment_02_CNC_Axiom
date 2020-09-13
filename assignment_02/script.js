const stdObj = {
  name: "Taimoor khan",
  age: "21",
  city: "Karachi",
};
//========STORING OBJECTS IN LOCAL STORAGE========
// /*
// Local storage can only save strings So in order to save
// our object we need to convet it to a string
// */
// localStorage.setItem("Student 1", JSON.stringify(stdObj));

// const getItem = localStorage.getItem("Student 1");

// /*
// Now we have to parse it back from string into object.
// */
// console.log(JSON.parse(getItem));

//========STORING OBJECTS IN SESSION STORAGE========

// Same for session storage convert object into string and then parse it backt to obj
sessionStorage.setItem("std1", JSON.stringify(stdObj));

const getItem = sessionStorage.getItem("std1");
console.log(JSON.parse(getItem));
