// 1

const person = {
  name: 'Карим',
  surname: 'Nyriev',
  old: 100,
  dreams: {
    dreams1: 'Понимать JavaScript',
    dreams2: 'Пройти курс Aroken.ru',
  },
};

for (const key in person) {
  console.log(person[key]);
}

for (const dremKey in person.dreams) {
  console.log(person.dreams[dremKey]);
}

// 2

const isEmpty = (oblect) => {
  for (const key in oblect) {
    return false;
  }
  return true;
};

// 3

let task = {
  title: 'Изучить JavaScript',
  description: 'Понять как работают объекты и функции',
  isCompleted: false,
};

function cloneAndModify(oblect, modifications) {
  return { ...oblect, ...modifications };
}

// 4

const callAllMethods = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === 'function') {
      obj[key];
    }
  }
};

const myObject = {
  method1() {
    console.log('Метод 1 вызван');
  },
  method2() {
    console.log('Метод 2 вызван');
  },
  property: 'Это не метод',
};

callAllMethods(myObject);
