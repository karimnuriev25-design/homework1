// 1
function colculateFinalPrice(price, discountPercent, taxRate) {
  const discount = price * (discountPercent / 100);
  discountPercent = price + discount;
  const tax = discountPercent * taxRate;
  return discountPercent + tax;
}

console.log(colculateFinalPrice(100, 10, 0.2));
console.log(colculateFinalPrice(100, 10, 0));

//  02

let name = prompt('Введите имя');
let password = prompt('Введите пароль');

function checkAccess(name, password) {
  if (name === 'admin' && password === '123456') {
    return 'Доступ разрешен';
  } else {
    return 'Доступ запрещен';
  }
}

let result1 = checkAccess(name, password);
alert(result1);

// 03

let time = +prompt('Введите время');

function getTimeOfDay(time) {
  if (time >= 0 && time <= 5) {
    return 'Ночь';
  } else if (time >= 6 && time <= 11) {
    return 'Утро';
  } else if (time >= 12 && time <= 17) {
    return 'День';
  } else if (time >= 18 && time <= 23) {
    return 'Вечер';
  } else {
    return 'Некорректное время';
  }
}

let result2 = getTimeOfDay(time);
alert(result2);

// 4

const findFirstEven = (start, end) => {
  if (start > end) return 'Неккоректный диапазон';
  const FirstEven = start % 2 === 0 ? start : start + 1;

  return FirstEven <= end ? FirstEven : 'Четных чисел нет';
};
