let string = "Hey fellow warriors";

// function spinWords(string) {
//   //TODO Have fun :)
//   //   Make a for loop that will run for the given array length
//   let wordsArray = string.split(" ");

//   for (let i = 0; i < wordsArray.length; i++) {
//     if (wordsArray[i].length >= 5) {
//       let reversedWord = "";
//       for (let p = 0; p < wordsArray[i].length; p++) {
//         const element = wordsArray[i];
//         reversedWord += element[wordsArray[i].length - p - 1];
//       }
//       wordsArray[i] = reversedWord;
//     }
//   }
//   const newString = wordsArray.join(" ");
//   return newString;
// }

// console.log(spinWords(string));

// 1 FOR LOOP

// function spinWords(string) {
//   let strArray = string.split(" ");

//   for (let i = 0; i < strArray.length; i++) {
//     if (strArray[i].length > 4) {
//       strArray[i] = strArray[i].split("").reverse().join("");
//       console.log(strArray);
//     }
//   }
// }

// spinWords(string);

// NO FOR LOOP

function spinWords(string) {
  return string
    .split(" ")
    .map((word) => {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

console.log(spinWords(string));

// string --> array ---> Map thru the array --> using a function, turn word into an array with split "" --> reverse --> join ""
