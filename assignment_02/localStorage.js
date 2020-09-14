const stdObj = {
  name: "Taimoor khan",
  age: "21",
  city: "Karachi",
};

//   ========STORING OBJECTS IN LOCAL STORAGE========
/*
  Local storage can only save strings So in order to save
  our object we need to convet it to a string
  */
localStorage.setItem("Student 1", JSON.stringify(stdObj));

/*
  Now we have to parse it back from string into object.
  */
const getItem = JSON.parse(localStorage.getItem("Student 1"));

console.log(getItem);
console.log(getItem.name);
console.log(getItem.age);
console.log(getItem.city);
