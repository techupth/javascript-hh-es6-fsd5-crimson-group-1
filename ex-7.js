const employee1 = {
  name: "John",
  age: 20,
  scores: {
    english: undefined,
  },
};

const result1 = employee1.scores.english;
console.log(result1);

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
    english: "English score is not defined",
  },
};

const result2 = employee2.scores.english;
console.log(result2);
