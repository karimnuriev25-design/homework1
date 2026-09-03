
 //if ( weather === "дождь"){
 // console.log("Остаемся дома");
 //} else if (weather === "солнечно"){
 //console.log("Идем гулять");
// } else if (weather === "облчно") {
//  console.log("Идем гулять,но берем зонт");
 //} else {
//  console.log(" что то странное с поголой");
// }

// const weather = "дождь";
 //switch  (weather) {

//  if 

 // case "дождь" :
 //   console.log("Остаемся дома");
  //  break;
 // case "солнечно" :
  //  console.log("Идем гулять");
   // break;
//  case "облчно" :
   // console.log("Идем гулять,но берем зонт");
  //  break;
//    case "облчно" :
  //  console.log("Идем гулять,но берем зонт");
 //   break;
//    default: 
  //  console.log("хз");
 //}
 


// 1 

 let num = 10;
 if (num % 2 === 0){
  console.log(num + "-четное");
 } else{
  console.log(num + "-нечетное");
 }



 // 2

let age = 30;

 if (age < 18){
  console.log("Скидка-10%");

 } else if ( age > 18 && age <=65){
  console.log("скидка-20%")
}  else if ( age > 65){
 console.log("скидка-30%")
}


// 2.5
  //почему то не работает(
//let age = 25;

//switch (true){
 //  case age < 18: 
 //  console.log("Скидка-10%");
 //  break;
 //  case  age > 18 && age <=65:
 //   console.log("скидка-20%")
 //  break;
 //  case age > 65:
 //  console.log("скидка-30%")
 //  break
//}


// 3

let userName = prompt("Введите имя");
let password = prompt("Введите пароль");

if (userName === "admin" && password === "123456"){
  console.log("Доступ разрешен")
} else if (userName === "user" && password === "123456"){
  console.log("Доступ разрешен")
} else {
  console.log("Доступ запрещен")
}




let weight = Number(prompt("Введите вес (кг):"));
let delivery = prompt("Тип доставки (эко, стандарт, премиум):").toLowerCase();

let weightCoeff = 1;
if (weight <= 2) weightCoeff = 1;
else if (weight <= 5) weightCoeff = 1.5;
else if (weight <= 10) weightCoeff = 2.2;
else if (weight <= 20) weightCoeff = 3.5;
else weightCoeff = 5;

let basePrice = 0;

if (delivery === "эко") {
    basePrice = 80;
} else if (delivery === "стандарт") {
    basePrice = 100;
} else if (delivery === "премиум") {
    basePrice = 150;
} else {
    alert("Неверный тип доставки!");
}

if (basePrice > 0) {
    let totalPrice = basePrice * weightCoeff;
    alert(" Вес: " + weight  +
          " Тип: " + delivery + 
          " Стоимость: " + Math.round(totalPrice) + "Руб");
}


