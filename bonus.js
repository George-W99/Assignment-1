let createCounter = (init) => {
  let currentCount = init;
  return {
    increment: () => {
      currentCount++;
      return currentCount;
    },
    decrement: () => {
      currentCount--;
      return currentCount;
    },
    reset: () => {
      currentCount = init;
      return currentCount;
    },
  };
};

const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

// https://leetcode.com/problems/counter-ii/submissions/1932278562
