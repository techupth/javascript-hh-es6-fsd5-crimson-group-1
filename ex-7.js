const employee1 = {
  name: "John",
  age: 20,
};

const result1 = employee1.scores?.english; // เติม ? ในจุดที่ต้องการเช่น หลัง scores เพื่อใช้ optional chaining เพื่อให้ผลสามารถ return เป็น undefined และข้าม error
console.log(result1);
// ใส่ optional chaining เพื่อดัก bypass error ไว้เมื่อเราไม่ชัวร์ข้อมูล ว่า value ที่ได้มาอาจเป็น undefined

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

const result2 = employee2.scores.english ?? "English score is not defined";
console.log(result2);
