// 1
let j = 4;
for (let i = 0 ;i <=20; i++ ) {
  if ( i % j ===0){
    continue
  }
  console.log(i)
}

// 2

let number =  +prompt("Введите число", 0);
let result = 1;

for (let counter = 1; counter <= number; counter++ ) {
  result = result * counter;
}

console.log(result);

// 3
bord = "";

for ( let i = 1 ; i <= 8 ; i++ ) {
  let line = "";
  for ( let j = 1; j <= 8; j++){
    if (( i + j) % 2 === 0){
      line +="Ч";
    } else {
     line +="Б"
    }
  }
  bord += line + "\n";
}

console.log(bord)