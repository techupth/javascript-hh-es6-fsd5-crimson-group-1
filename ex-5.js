function sum(...number) {
  // Start coding here !
  let total = 0;
  for (let i in number) {
    total += number[i];
  }
  return total;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
