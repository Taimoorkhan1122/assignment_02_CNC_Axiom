//========HOW TO DO NESTED DESTRUCTRING IN OBJECTS AND REPLACE VALUES========

let nestedObj = {
  movieName: "Justice League (Snyder Cut)",
  premierDate: "20 October 2020",
  TickectsAvailable: 100,
  pricing: {
    Gold: 1700,
    Business: 1000,
    luxury: 800,
    standart: 500,
  },
};

let {
  movieName: Movie,
  pricing: { Gold: Silver, luxury: Comfort }, //Changing Gold to Silver and Luxury to Comfort.
} = nestedObj;

console.log(Movie, Silver, Comfort);
