'use strict';

//                     1
const users = [
  { name: 'Alex', age: 24, isAdmin: false },
  { name: 'Bob', age: 13, isAdmin: false },
  { name: 'John', age: 31, isAdmin: true },
  { name: 'Jane', age: 20, isAdmin: false },
];

users.push(
  { name: 'Ann', age: 19, isAdmin: false },
  { name: 'Jack', age: 43, isAdmin: true },
);

console.log(users);

//                     2
function getUserAverageAge(users) {
  let sum = 0;
  for (let i = 0; i < users.length; i++) {
    sum += users[i].age;
  }
  return sum / users.length;
}

console.log(getUserAverageAge(users));

//                     3

function getAllAdmins(users) {
  return users.filter((user) => user.isAdmin === true);
}
console.log(getAllAdmins(users));

//                     4

function first(arr, n) {
  if (n === undefined) {
    return [arr[0]];
  }

  if (n === 0) {
    return [];
  }

  return arr.slice(0, n);
}

const arr = [10, 20, 30];

console.log(first(arr, 2));
