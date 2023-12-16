let height = undefined;
let result;

function check(height) {
  let resultHeight = height ?? "Height is not defined";
  return resultHeight;
}

result = check(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
