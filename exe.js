//ex1
function maxornot(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}
console.log("max:", maxornot(19, 67));
//ex2

let arrayofnumbers = [2, 4, 5, 6, 7];
function numbers(searcharr, x) {
  console.log("Array:", searcharr);
  console.log("find number:", x);
  for (let i = 0; i < arrayofnumbers.length; i++) {
    if (searcharr[i] === x) {
      return i;
    }
  }
  return -1;
}

let idx = numbers(arrayofnumbers, 6);
console.log("index:", idx);

//ex3
let ofstaff = ["namuun", "tsolmon", "tergel", "amaraa"];
function staff(searcharr, x) {
  console.log("Array of staff:", searcharr);
  console.log("find name:", x);
  for (let i = 0; i <= ofstaff.length - 1; i++) {
    for (let l = 0; l <= ofstaff.length - 1; l++) {
      if (x === searcharr[i][l]) {
        return i;
      }
    }
  }
  return -1;
}
let index = staff(ofstaff, "a");
console.log("index", index);

//ex4
let average = 0,
  sum1 = 0;
let x = (y) => {
  for (i = 0; i <= y.length - 1; i++) {
    sum1 = sum1 + y[i];
    average = sum1 / 5;
  }
  return average;
};

console.log("average of array:", x([4, 5, 6, 7, 8]));

//ex5;
let sum = 0;
let n = (arr) => {
  for (i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

console.log("sum:", n([5, 6, 7, 8, 2, 1, 3]));

//ex6

let primenumber = (p) => {
  for (let l = 2; l <= p - 1; l++) {
    if (p % l > 0) {
      return p;
    } else if (p % l === 0) {
      return -1;
    }
  }
};
console.log("prime too bish bol -1 butsaagdana:", primenumber(100001));

//ex7

// orginalNum = 121
// reversedNum = 0;
// while(number > 0)
// lastDigit = number % 10
// reversedNum = (reversedNum * 10) + lastDigit 121
// number = Math.floor(number / 10) 12

// orignal === reversedNum

// let palindrome = (originalNum) => {
//   let reversedNum = 0;
//   let number = originalNum;
//   while (number > 0) {
//     let lastdigit = originalNum % 10;
//     reversedNum = reversedNum * 10 + lastdigit;
//     number = Math.floor(originalNum / 10);
//   }
//   if (originalNum === reversedNum) {
//     return true;
//   }
//   return false;
// };
// console.log("Palindrome mun eseh:", palindrome(121));

//ex9

let students = [
  {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male",
    points: 70
  },
  {
    name: 'Индра',
    age: 19,
    gender: "female",
    points: 50
  },
  {
    name: 'Хатнаа ',
    age: 21,
    gender: "male",
    points: 99
  },
  {
    name: 'Тэмүүлэн',
    age: 23,
    gender: "male",
    points: 55
  },
  {
    name: 'Намуун',
    age: 23,
    gender: "female",
    points: 85
  },
]
console.log("ehnii suragc:", students[0]);
let male, female;
function maleorfemale(gender) {
  if (gender === male) {
    return male;
  } else {
    return female;  }
}
maleorfemale(students.gender);

