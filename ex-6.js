let height = undefined;
let result = a(height);

function a(height) {
  let result = height ?? "Height is not defined";
  return result;
}

console.log(result);
