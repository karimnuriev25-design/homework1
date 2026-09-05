// 1

const basePrice = 100;

function calculateFinalPrice(price) {
 let discount = 10;
 let tax = 0.2;

 let afterDiscount = price - (price * discount /100);

 let result = afterDiscount * (1 + tax);
 
 return result;
}

let finalPrice = calculateFinalPrice(basePrice);
console.log(finalPrice);


//  02

let name = prompt("Введите имя")
let password = prompt("Введите пароль")

function checkAccess(name,password){
  if( name === "Admin" && password === "123456"){
    return "Достпуп разрешен"
  } else {
    return "Достпуп запрещен"
  }
}

let result1 = checkAccess(name,password);
alert(result1);

// 03

let time = +prompt("Введите время")


function getTimeOfDay(time){
  if( time >= 0 && time <= 5){
    return "Ночь";
  } else if (time >= 6 && time <= 11) {
    return "Утро"
  }
  else if (time >= 12 && time <= 17) {
    return "День"
}else if (time >= 18 && time <= 23) {
    return "Вечер"
}else {
  return "Неккоректное время"
}
}

let result2 = getTimeOfDay(time);
alert(result2);

//  4

let start = +prompt("Введите первое число(начало диапозона):")
let end = +prompt("Введите второе число(конец диапозона):")

function findFirstEven(start,end){
  let count = 0;
  for (let i = start ; i <= end ; i++){
    if ( i % 2 === 0){
      count++;
    }
    
  }
  return count;
}

let result = findFirstEven(start,end);
alert("Кол-во четных чисел" + result);