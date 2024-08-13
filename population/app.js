// function nbYear(p0, percent, aug, p, year = 0) {
//   // your code
//   percent = percent * 0.01;
//   // p0 is the current town population
//   // percent is the rate of increase per year
//   // aug is the addtl # of people each year
//   // p is the target population

//   // #1 Make a the formula, per year.

//   if (p0 < p) {
//     year++;
//     newTotal = Math.floor(p0 + p0 * percent + aug);
//     console.log(newTotal);

//     return nbYear(newTotal, percent, aug, p);
//   }

//   return year;
// }

function nbYear(p0, percent, aug, p) {
  let year = 0;
  while (p0 < p) {
    p0 = Math.floor(p0 + p0 * percent * 0.01 + aug);
    year++;
  }
  return year;
}

let result = nbYear(1500, 5, 100, 5000);
console.log(result);
