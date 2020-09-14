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

// /*
// Now we have to parse it back from string into object.
// */
// const getItem = JSON.parse(localStorage.getItem("Student 1"));

// console.log(getItem);
// console.log(getItem.name);
// console.log(getItem.age);
// console.log(getItem.city);

//========STORING OBJECTS IN SESSION STORAGE========

// /*
// Same for session storage convert object into
//  string and then parse it backt to obj
// */
// sessionStorage.setItem("std1", JSON.stringify(stdObj));

// const getItem = JSON.parse(sessionStorage.getItem("std1"));
// console.log(getItem);
// console.log(getItem.name);
// console.log(getItem.age);
// console.log(getItem.city);

//========HOW TO DO NESTED DESTRUCTRING IN OBJECTS AND REPLACE VALUES========

// let nestedObj = {
//   movieName: "Justice League (Snyder Cut)",
//   premierDate: "20 October 2020",
//   TickectsAvailable: 100,
//   pricing: {
//     Gold: 1700,
//     Business: 1000,
//     luxury: 800,
//     standart: 500,
//   },
// };

// let {
//   movieName: Movie,
//   pricing: { Gold: Silver, luxury: Comfort }, //Changing Gold to Silver and Luxury to Comfort.
// } = nestedObj;

// console.log(Movie, Silver, Comfort);

//======== Spreading Objects and Changing them ========
