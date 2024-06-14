/*let n = Number(prompt("Natural too oruulna uu:"));
let factorial = 1;
for (let i = 1; i <= n; i++){
    factorial *= i;
}
console.log("n toonii factorial:", factorial);

//ex6 
let a = Number(prompt("3 orontoi too oruulna uu:"));
let temp = 0, k = 0, j=0, l=0, sum=0;

while(a>=100){
    k = a / 100;
    j = a % 100;
    l = j / 10;
    temp = a % 10;
    sum = k + l + temp;
    console.log("n hurtelh toonii tsifruudin niilber:", sum);
    break;
}
//ex3
 
let  num=0;

for (let m = 0; m <= 10; m++){
    num = m % 2;
        if (num === 0) {
           console.log("even numbers", m);
    }
}
//ex2

let  num1=0;

for (let d = 0; d <= 10; d++){
    num = d % 2;
        if (num>0) {
           console.log("odd numbers", d);
    }
}

//ex8

let e = Number(prompt("3 orontoi too oruulna uu:"));
let tem = 0, f= 0, g=0, h=0, sum2=0;

while(e>=100){
    f = e / 100;
 let   k = f % 2;
        if (k === 0) {
            sum2 +=k;
        }
    
    g = e % 100;
    h = g / 10;
  let  i = h % 2;
    if (i === 0) {
        sum2 += i;
        }
    tem = e % 10;
 let   temp = tem % 2;
    if (temp === 0) {
        sum2 += temp;
        }
    console.log("3 orontoi toonii tegsh tsifruudiin niilber:", sum2);
    break;
}

//ex9

let n = Number(prompt("natural too oruulna uu:"));
let num = 1, sum=0;
for (let i = 0; i <= n; i++){
    num = i % 2;
    if (num > 0) {
        sum = sum + i;
        console.log("odd numbers", i);
       }
}
console.log("sum of odd numbers", sum);
//ex10

let m = Number(prompt("natural too oruulna uu:"));
let num1 = 1, sum1=0;
for (let k = 0; k <= m; k++){
    num1 = k % 2;
    if (num1 === 0) {
        sum1 = sum1 + k;
        console.log("even numbers", k);
       }
}
console.log("sum of even numbers", sum1);
let x = ['a', 'b', 'c','d','e','f','j'];
for (let i = 0; i < x.length; i++){
    for (let j = 0; j < x[0].length; j++){
        console.log(x[i][j]);
    }
}

let fruits = ["apple", "banana", "orange", "kiwi", "grape"];
console.log("fruits array ehnii element:", fruits[0]);
console.log("suulin element:", fruits[4]);
console.log("3 dahi:", fruits[3]);*/

//ex2

let array = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let num1 = 1,
  sum = 0,
  average = 1,
  sum1 = 0,
  sum2 = 1,
  j,
  k,
  t = 0,
  s = 0;
for (let k = 0; k < array.length; k++) {
  sum = sum + array[k];
  average = sum / 1;
  if (array[k] % 2) {
    s++;
    sum2 = sum2 * array[k];
  } else {
    t++;
    sum1 = sum1 + array[k];
  }
}
console.log("tegsh count:", t);
console.log("sondgoi count:", s);

let min = array[0];
for (k = 0; k < array.length; k++) {
  if (array[k] < array[0]) {
    min = array[k];
  }
}
let max;
for (j = 0; j < array.length; j++) {
  if (array[j] > array[9]) {
    max = array[j];
  }
}

console.log("sum", sum);
console.log("Tegsh toonudin niilber:", sum1);
console.log("Sondgoi toonuudin urjwer:", sum2);
console.log("length", array.length);
console.log("average:", average);
console.log("hamgiin baga:", min);
console.log("hamgiin ih:", max);
