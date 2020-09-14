//======== Spreading Objects and Changing them ========

let nestedObj = {
  movieName: "Justice League (Snyder Cut)",
  premierDate: "20 October 2020",
  TickectsAvailable: 100,
  pricing: {
    Gold: 1700,
    Business: 1000,
    Luxury: 800,
    Standard: 500,
  },
};

let newRates = {
  ...nestedObj,
  pricing: {
    ...nestedObj.pricing,
    Standard: 600,
  },
};

console.log("Old Price: " + nestedObj.pricing.Standard);
console.log("New Price: " + newRates.pricing.Standard);
