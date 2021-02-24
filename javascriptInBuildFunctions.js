//Create an array of student ages that meet the legal drinking age.
const studentsAge = [17, 16, 18, 19, 21, 17];
const ableToDrink = studentsAge.filter((age) => age > 18);
// ableToDrink will be equal to [19, 21]

//Creates a new array by manipulating the values in another array. Great for data manipulation and it is often used in React because it is an immutable method.
const numbers = [2, 3, 4, 5];
const dollars = numbers.map((number) => "$" + number);
// dollars will be equal to ['$2', '$3', '$4', '$5']

//.reduce()
//This often overlooked method uses an accumulator to reduce all items in an array to a single value. Great for calculating totals.

const numbers = [5, 10, 15];
const total = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
// total will be equal to 30

//.forEach()
const emotions = ["happy", "sad", "angry"];
emotions.forEach((emotion) => console.log(emotion));
// Will log the following:
// 'happy'
// 'sad'
// 'angry'

// .some()
// Checks if any item in an array passes the condition.

const userPrivileges = ["user", "user", "user", "admin"];
const containsAdmin = userPrivileges.some((element) => element === "admin");
// containsAdmin will be equal to true

// .every()
//Similar to .some(), but checks if all items in an array pass a condition.
const ratings = [3, 5, 4, 3, 5];
const goodOverallRating = ratings.every((rating) => rating >= 3);
// goodOverallRating will be equal to true

// .includes()
// Checks if an array contains a certain value.

const names = ["sophie", "george", "waldo", "stephen", "henry"];
const includesWaldo = names.includes("waldo");
// includesWaldo will be equal to true

// Object.values()
// Return an array of the values of an object.
const icecreamColors = {
  chocolate: "brown",
  vanilla: "white",
  strawberry: "red",
};

const colors = Object.values(icecreamColors);
// colors will be equal to ["brown", "white", "red"]

// Object.keys()
//Return an array of the keys of an object.
const icecreamColors = {
  chocolate: "brown",
  vanilla: "white",
  strawberry: "red",
};

const types = Object.keys(icecreamColors);
// types will be equal to ["chocolate", "vanilla", "strawberry"]

//   Object.entries()
// Creates an array which contains arrays of key/value pairs of an object.

const weather = {
  rain: 0,
  temperature: 24,
  humidity: 33,
};

const entries = Object.entries(weather);
// entries will be equal to
// [['rain', 0], ['temperature', 24], ['humidity', 33]]

//   Object.assign()
// Allows for objects to be combined together.
const firstObject = {
  firstName: "Robert",
};

const secondObject = {
  lastName: "Cooper",
};

const combinedObject = Object.assign(firstObject, secondObject);
// combinedObject will be equal to { firstName: 'Robert', lastName: 'Cooper' }
