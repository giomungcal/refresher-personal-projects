function digitalRoot(num) {
  //   let sum = String(num);
  //   let i = 0;
  //   do {
  //     sum = String(
  //       sum.split("").reduce((previous, current) => {
  //         return (previous += +current);
  //       }, 0)
  //     );
  //     i++;
  //     console.log(sum.length);
  //   } while (sum.length > 1);
  //   return Number(sum);

  // CHAT GPT CODE

  while (num >= 10) {
    num = String(num)
      .split("")
      .reduce((previous, current) => {
        return previous + +current;
      }, 0);
  }

  return Number(num);
}

console.log(digitalRoot(132189));

// take the sum of all numbers --> then take the sum --> then get the sum again
