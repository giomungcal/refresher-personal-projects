// const user = {
//   name: "Giomar Mungcal",
//   age: 26,
//   greetRegular() {
//     return `Hello, my name is ${this.name} and I'm ${this.age}.`;
//   },
//   greetArrow: () => {
//     return `Hello, my name is ${this.name} and I'm ${this.age}.`;
//   },
// };

// console.log(user.greetRegular());
// console.log(user.greetArrow());

// const vehicleTracker = (type, brand, model, year) => {
//   return {
//     type,
//     brand,
//     model,
//     year,
//     intro() {
//       return `hey, im gay and i love the ${this.type} ${this.brand} ${this.model} that was released last ${this.year}. OMG! `;
//     },
//     updateYear(newYear) {
//       this.year = newYear;
//       return `You've updated the year of this model to ${this.year}!`;
//     },
//     start() {
//       return `VROOM VROOM BITCH da ${this.type} is now running`;
//     },
//   };
// };

// const gioCar = vehicleTracker("sedan", "nissan", "navara", "1977");
// const gregCar = vehicleTracker("SHEDUGH", "neehsaG", "BRAT", "2024");

// // console.log(gioCar.intro());
// // console.log(gregCar.intro());

// // console.log(gioCar.updateYear(2099));
// // console.log(gioCar.intro());
// // console.log(gregCar.start());

// // Constructor Functions

// function Car(make, model, year, color) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;

//   this.start = function () {
//     return `Your car is now vroom vroom baby! Yass werq that ${this.color} ${this.make} ${this.model} released last ${this.year} YASSS!`;
//   };

//   this.stop = function () {
//     return `BITCH your ${this.color} ${this.make} ${this.model} released last ${this.year} just mothahfucking stopped!!`;
//   };

//   this.updateYear = function (newYear) {
//     this.year = newYear;
//     return `Your ${this.make} ${this.model} has been updated! It was now ~allegedly~ released last ${this.year} HOW???`;
//   };
// }

// const gioCar = new Car("toyota", "sedan", 1980, "navy blue");

// console.log(gioCar.start());
// console.log(gioCar.stop());

// console.log(gioCar.updateYear(444444));

// console.log(gioCar instanceof Car);

// // -----------------------------------------------------------------------------------

// Factory Functions

// function carFactory(make, model, year, color) {
//   return {
//     make,
//     model,
//     year,
//     color,
//     start() {
//       return `Your car is now vroom vroom baby! Yass werq that ${this.color} ${this.make} ${this.model} released last ${this.year} YASSS!`;
//     },
//     stop() {
//       return `BITCH your ${this.color} ${this.make} ${this.model} released last ${this.year} just mothahfucking stopped!!`;
//     },
//     updateYear(newYear) {
//       this.year = newYear;
//       return `Your ${this.make} ${this.model} has been updated! It was now ~allegedly~ released last ${this.year} HOW???`;
//     },
//   };
// }

// const gioFactoryCar = carFactory("toyota", "sedan", 1980, "navy blue");

// console.log(gioFactoryCar.start());
// console.log(gioFactoryCar.stop());

// console.log(gioFactoryCar.updateYear(9999999));

// console.log(gioFactoryCar instanceof carFactory);

// // -----------------------------------------------------------------------------------

// BEST PRACTICE !!!!!

// Class Functions - always use Classes for object initialization (containing methods and such)
// // Explanation by: https://www.reddit.com/r/javascript/comments/yr34u8/comment/ivrxxgt/?share_id=WGXyOMX-Fr9OuNrEhJ07l&utm_content=2&utm_medium=android_app&utm_name=androidcss&utm_source=share&utm_term=1

// let SAMPLE_NAMES = [
//   "Alice",
//   "Bob",
//   "Charlie",
//   "David",
//   "Eve",
//   "Frank",
//   "Grace",
//   "Hannah",
//   "Ivy",
//   "Jack",
// ];

// let SAMPLE_GENDERS = [
//   "Male",
//   "Female",
//   "Non-Binary",
//   "Genderqueer",
//   "Agender",
//   "Bigender",
//   "Genderfluid",
//   "Transgender",
//   "Intersex",
//   "Other",
// ];

// class Person {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }

//   format() {
//     return `${this.name} is ${this.age} years old and ${this.gender}.`;
//   }
// }

// // with some Constructor Function ONLY use-case --> for constant object initialization

// function createBlankPerson() {
//   return new Person("", 0, "unknown");
// }

// function createRandomPerson() {
//   return new Person(
//     SAMPLE_NAMES[randomInt(0, SAMPLE_NAMES.length)],
//     randomInt(18, 100),
//     SAMPLE_GENDERS[randomInt(0, SAMPLE_GENDERS.length)]
//   );
// }

// function randomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// // console.log(createRandomPerson());
// // console.log(createBlankPerson());
// console.log(SAMPLE_GENDERS);

// // -----------------------------------------------------------------------------------

// Class Declaration

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.scream = function () {
//       return `AGHHHHHHHHH! im ${this.firstName}`;
//     };
//   }

//   printUserInfo() {
//     return `I am ${this.firstName} ${this.lastName} and I am ${this.age} years old oh my god!!`;
//   }
// }

// class Student extends Person {
//   constructor(firstName, lastName, age, program, dateOfYearStarted) {
//     super(firstName, lastName, age);
//     this.program = program;
//     this.dateOfYearStarted = dateOfYearStarted;
//   }
// }

// const gio = new Person("Gio", "Mungcal", 26);
// const gioStudent = new Student("Gio", "Mungcal", 26, "BS CpE", "2015");

// console.log(gioStudent.printUserInfo());
// console.log(gioStudent.scream());

// // --------------------

// // Class Declaration Challenge:

// // 1. Creating the base class:

// class Animal {
//   constructor(name, species, age) {
//     this.name = name;
//     this.species = species;
//     this.age = age;
//   }

//   makeSound() {
//     return `${this.name} makes a sound. Blah, idk generic animal soundss~~`;
//   }

//   describe() {
//     return `You are now looking at a ${this.age} year old, ${this.species} named ${this.name}. What a cute animal!`;
//   }
// }

// class Lion extends Animal {
//   constructor(name, age, prideSize) {
//     super(name, "Lion", age);
//     this.prideSize = prideSize;
//   }

//   roar() {
//     return `The ${this.prideSize} pride named ${this.name} rooaAAAARS!`;
//   }

//   describe() {
//     return `LION OMG You are now looking at a ${this.age} year old, ${this.species} named ${this.name}. What a cute ${this.species}!`;
//   }
// }
// class Elephant extends Animal {
//   constructor(name, age, trunkLength) {
//     super(name, "Elephant", age);
//     this.trunkLength = trunkLength;
//   }
//   trumpet() {
//     return `The ${this.trunkLength} trunked elephant named ${this.name} says bowaaAHHHHHHH!`;
//   }
//   describe() {
//     return `ELEPHANT OMG You are now looking at a ${this.age} year old, ${this.species} named ${this.name}. What a cute ${this.species}!`;
//   }
// }
// class Giraffe extends Animal {
//   constructor(name, age, neckLength) {
//     super(name, "Giraffe", age);
//     this.neckLength = neckLength;
//   }

//   stretchNeck() {
//     return `The ${this.stretchNeck} long necked giraffe named ${this.name} stretches its neck to reach an apple!`;
//   }

//   describe() {
//     return `GIRAFFE OMGYou are now looking at a ${this.age} year old, ${this.species} named ${this.name}. What a cute ${this.species}!`;
//   }
// }

// const gioGiraffe = new Giraffe("Gio", 13, 80);

// console.log(gioGiraffe instanceof Animal);

// // --------------------------------------------------

// Zoo Creator Challenge by ChatGPT - RAW CODE

// class Zoo {
//   constructor(nameOfZoo) {
//     this.nameOfZoo = nameOfZoo;
//     this.animals = [];
//   }

//   addAnimals(species, age) {
//     // Find index of the species
//     let indexOfSpecies = this.animals.findIndex(
//       (animal) => animal.species === species
//     );

//     // If species exists, increment the count. ELSE If species does not exist, add new species with count 1
//     indexOfSpecies != -1
//       ? this.animals[indexOfSpecies].count++
//       : this.animals.push({ species, age, count: 1 });
//   }

//   removeAnimals(species) {
//     // Find index of the species
//     let indexOfSpecies = this.animals.findIndex(
//       (animal) => animal.species === species
//     );

//     // If species does not exist, return message. Else, execute decrease of count/removal of animal.
//     if (indexOfSpecies === -1) {
//       console.log(`No species existing yet.`);
//     } else if (this.animals[indexOfSpecies].count === 1) {
//       //  Remove the animal from the zoo - delete the object
//       this.animals.splice(indexOfSpecies, 1);
//     } else {
//       // Decrease the count of the species.
//       this.animals[indexOfSpecies].count--;
//     }
//   }
// }

// // ------------------------

// Zoo Code Refined - added count for both addAnimals and removeAnimals; removed age for addAnimals.

class Zoo {
  constructor(nameOfZoo) {
    this.nameOfZoo = nameOfZoo;
    this.animals = [];
  }

  addAnimals(species, count = 1) {
    let animalObj = this.animals.find((animal) => animal.species === species);

    // If animalObj exists, add count. Otherwise, push new obj.
    if (animalObj) {
      animalObj.count += count;
    } else {
      this.animals.push({ species, count });
    }
  }
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // removeAnimals - Variation Number 1 - Remove only one animal per execution.

  // removeAnimals(species) {
  //   let index = this.animals.findIndex((animal) => animal.species === species);

  //   if (index === -1) {
  //     console.log(index);

  //     console.log("No animal of that species exists yet.");
  //     return;
  //   }

  //   // let animalObj = this.animals.find((animal) => animal.species === species);
  //   let animal = this.animals[index];

  //   if (animal.count === 1) {
  //     this.animals.splice(index, 1);
  //   } else {
  //     animal.count--;
  //   }
  // }

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // removeAnimals - Variation Number 2 - Remove count of animal specified.

  removeAnimals(species, count) {
    let index = this.animals.findIndex((animal) => animal.species === species);
    let animal = this.animals[index];

    if (index === -1) {
      console.log("No species of that animal yet.");
      return;
    }

    if (count > animal.count) {
      console.log(
        `We only have ${animal.count} ${animal.species}s in the zoo. You requested for ${count} to be removed.`
      );
      return;
    }

    // let animalObj = this.animals.find((animal) => animal.species === species);

    if (animal.count === count) {
      this.animals.splice(index, 1);
    } else {
      animal.count -= count;
    }
  }

  printAnimals() {
    console.log("Current animals in the zoo:");
    this.animals.forEach((animalObj) => {
      return console.log(
        `Species: ${
          animalObj.species[0].toUpperCase() + animalObj.species.slice(1)
        } | Count: ${animalObj.count}`
      );
    });
  }
}

const sanRafaelZoo = new Zoo("San Rafael Zoo");

// sanRafaelZoo.addAnimals("frog", 3);
// sanRafaelZoo.addAnimals("frog", 3);
// sanRafaelZoo.addAnimals("frog", 2);
// sanRafaelZoo.addAnimals("sheep", 2);
// sanRafaelZoo.addAnimals("dog", 9);
// sanRafaelZoo.addAnimals("wolf", 5);

// sanRafaelZoo.removeAnimals("frog", 3); // Should fail because only 2 frogs are present

// sanRafaelZoo.printAnimals();

// --------------------------------------------------------------------------------------

// Callback Functions

// Exercise: Array Filtering with Callback
// Objective: Write a function that filters an array based on a condition provided by a callback function.

// Instructions:

// Create a filterArray Function:

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function filterArray(array, callback) {
//   //   let result = [];

//   //   for (i = 0; i < array.length; i++) {
//   //     if (callback(array[i])) {
//   //       result.push(array[i]);
//   //     }
//   //   }

//   //   return result;

//   return array.filter((num) => {
//     return callback(num);
//   });
// }

// function divisibleBy3(num) {
//   return num % 3 === 0;
// }

// function oddNum(num) {
//   return num % 2 != 0;
// }

// function evenNum(num) {
//   return num % 2 === 0;
// }

// console.log("Start");

// console.log(filterArray(numbers, divisibleBy3));
// console.log(filterArray(numbers, oddNum));
// console.log(filterArray(numbers, evenNum));

// console.log("End");

// This function should accept two parameters:
// An array of numbers.
// A callback function that determines if an element should be included in the result.
// Inside filterArray:

// Use the callback function to test each element of the array.
// Return a new array that includes only the elements for which the callback returns true.
// Test the filterArray Function:

// Create a few different callback functions to test various conditions.
// Use filterArray to filter numbers greater than a specific value, even numbers, etc.

// ----------------------------------------------
// Refactor this code to use Promises
// console.log("Start");

// function getUserDataFromDB(name, callback) {
//   setTimeout(() => {
//     console.log("Getting User Name...");
//     callback(name);
//   }, 2000);
// }

// function getUserHobbies(name, callback) {
//   setTimeout(() => {
//     console.log("Getting user hobbies...");
//     callback(["Cricket", "Reading", "Dancing"]);
//   }, 2000);
// }

// getUserDataFromDB("HuXn", (data) => {
//   console.log(data);
//   getUserHobbies(data, (hobby) => {
//     console.log(hobby);
//   });
// });

// console.log("End");

// ------------------------------------------------------

// Refactored using PROMISES ONLY

// console.log("Start");

// function getUserDataFromDB(name, hobbies) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting User Name...");

//       name === "Gio"
//         ? resolve({ name, hobbies })
//         : reject(
//             `Error found in: ${getUserDataFromDB.name}(). Name is not Gio.`
//           );
//     }, 1000);
//   });
// }

// function getUserHobbies(name, hobbies) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Name: ${name}`);
//       console.log("Getting User Hobbies...");

//       hobbies.find((data) => data === "Drag")
//         ? resolve(hobbies)
//         : reject(
//             `Error found in: ${getUserHobbies.name}(). Hobbies do not include drag.`
//           );
//     }, 700);
//   });
// }

// getUserDataFromDB("Gio", ["Drag", "Reading", "Dancing"])
//   .then(({ name, hobbies }) => getUserHobbies(name, hobbies))
//   .then((data) => console.log(data))
//   .catch((error) => console.log(`Error: ${error}`));

// console.log("End");

// ----------------------------------------------

// Refactor using async/await

// console.log("Start");

// function getUserDataFromDB(name, hobbies) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Getting user name...");
//       resolve({ name, hobbies });
//     }, 1500);
//   });
// }

// function getUserHobbies(name, hobbies) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Name: ${name}`);
//       console.log(`Getting user hobbies..`);
//       resolve(hobbies);
//     }, 1000);
//   });
// }

// async function displayAllData(name, hobbies) {
//   try {
//     const { name: data1, hobbies: data2 } = await getUserDataFromDB(
//       name,
//       hobbies
//     );
//     const finalData = await getUserHobbies(data1, data2);
//     console.log(finalData);
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   }
// }

// displayAllData("Gio", ["Drag", "Reading", "Dancing"]);

// console.log("End");

// -----------------------------------------

// Fetching actual data from an API

// const data = fetch("https://jsonplaceholder.typicode.com/posts");

// console.log(data.json());

async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => {
          if (!response.ok)
            throw new Error(`Network response error: ${response.statusText}`);
          return response.json();
        })
        .then((data) => resolve(data.slice(0, 50)))
        .catch((error) => reject(error));
    }, 1000);
  });
}

async function fetchAndDisplayResults(cardsNumber) {
  try {
    const fetchedData = await fetchData();

    // Create a number of cards on page-load.
    createACard(cardsNumber, fetchedData);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

function createACard(cardsNumber, fetchedData) {
  const container = document.querySelector(".container");
  const info = document.querySelectorAll(".info");

  for (let i = 0; i < cardsNumber; i++) {
    const card = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const button = document.createElement("a");

    card.className =
      "card p-4 mb-4 max-w-[450px] mx-auto md:max-w-[384px] md:mx-3 bg-gray-800";
    img.className = "w-full max-w-[450px]";
    title.className = "text-white text-lg pt-2";
    description.className = "text-xs text-gray-400 leading-5 break-words mb-2";
    button.className =
      "bg-gray-900 text-gray-300 border-none p-1 px-2 font-bold text-sm letter-space rounded-md";
    //   card.textContent = `Testing lang ito: Iteration ${i}. `;
    container.append(card);
    card.append(img, title, description, button);

    img.src = fetchedData[i].thumbnailUrl;
    title.textContent = fetchedData[i].title.slice(0, 12);
    description.textContent = fetchedData[i].url + fetchedData[i].url;
    button.textContent = "source";
    button.href = fetchedData[i].url;
    button.target = "_blank";
  }
}

fetchAndDisplayResults(50);
