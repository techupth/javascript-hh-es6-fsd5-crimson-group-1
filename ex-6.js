let height = undefined;
let result;

function check(height) {
  result = height ?? `Height is not defined`;
  return result;
}
check(height);

console.log(result);
//  Result ควรจะได้ออกมาเป็น “Height is not defined”
