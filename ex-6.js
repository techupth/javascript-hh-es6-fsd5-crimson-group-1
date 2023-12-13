let height = undefined;
let result;

function checkHeight(height) {
  return height ?? "Height is not defined";
}

result = checkHeight(height);
console.log(result);
