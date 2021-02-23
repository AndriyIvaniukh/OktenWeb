// - створити функцію яка виводить масив

// let mas = ["val1", "val2", 3, 4, 5, 6, 8, 2];

// function writeMas(mas) {
//     document.write(mas);
// }

// writeMas(mas);

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// let mas = [];

// function random(mas) {
//     for (let i = 0; i < 10; i++) {
//         mas[i] = Math.floor(Math.random() * 100);
//     }
//     return mas;
// }

// function writeMas(mas) {
//     for (let m of mas) {
//         document.write(m + '<br>');
//     }
// }


// writeMas(random(mas));

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// let a = 3;
// let b = 2;
// let c = 9;

// function less(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//         return a;
//     } else
//     if (b < a && b < c) {
//         console.log(b);
//         return b;
//     } else {
//         console.log(c);
//         return c;
//     }
// }

// document.write(less(a, b, c));

// - створити функцію яка приймає три числа та виводить та повертає найбільше.


// let a = 3;
// let b = 2;
// let c = 9;

// function bigest(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//         return a;
//     } else
//     if (b > a && b > c) {
//         console.log(b);
//         return b;
//     } else {
//         console.log(c);
//         return c;
//     }
// }

// document.write(bigest(a, b, c));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function returnLessWriteBigest() {
//     let min = arguments[0];
//     let max = arguments[0];

//     for (let arg of arguments) {
//         if (arg > max) {
//             max = arg;
//         }
//         if (arg < min) {
//             min = arg;
//         }
//     }

//     console.log(max);
//     return min;
// }


// returnLessWriteBigest(5, 3, 4, 9, 2, 1, 52, 4, 3);


// - створити функцію яка повертає найбільше число з масиву

// let mas = [5, 7, 9, 6, 3, 5, 1, 5, 4, 3, 9, 10];

// function returnLessMas(mas) {
//     let max = mas[0];
//     for (let m of mas) {
//         if (m > max) {
//             max = m;
//         }
//     }
//     return max;
// }

// console.log(returnLessMas(mas));

// - створити функцію яка повертає найменьше число з масиву


// let mas = [5, 7, 9, 6, 3, 5, 1, 5, 4, 3, 9, 10];

// function returnLessMas(mas) {
//     let min = mas[0];
//     for (let m of mas) {
//         if (m < min) {
//             min = m;
//         }
//     }
//     return min;
// }

// console.log(returnLessMas(mas));



// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.


// let mas = [5, 7, 9, 6, 3, 5, 1, 5, 4, 3, 9, 10];

// function returnSum(mas) {
//     let sum = 0;
//     for (let m of mas) {
//         sum += m;
//     }
//     return sum;
// }

// console.log(returnSum(mas));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let mas = [5, 7, 9, 6, 3, 5, 1, 5, 4, 3, 9, 10];

// function returnMiddleValue(mas) {
//     let sum = 0;
//     let i = 0;
//     for (let m of mas) {
//         sum += m;
//         i++;
//     }
//     return sum / i;
// }

// console.log(returnMiddleValue(mas));


// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// function countObject() {
//     let i = 0;
//     for (let arg of arguments) {
//         if (typeof arg === 'object' && !Array.isArray(arg))
//             i++;
//     }
//     return i;
// }

// console.log(countObject({ name: "marusia", age: 31 }, { name: "andriy", age: 19 }, { name: "mikola" }));

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// function countObject() {
//     let i = 0;
//     for (let arg of arguments) {
//         if (typeof arg === 'object' && !Array.isArray(arg))
//             for (let a in arg) {
//                 i++;
//             }
//     }
//     return i;
// }

// console.log(countObject({ name: "marusia", age: 31 }, { name: "andriy", age: 19 }, { name: "mikola" }));

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// let a = [1, 2, 3, 4];
// let b = [2, 3, 4, 5];


// function sumMas(a, b) {
//     let c = [];
//     for (let i = 0; i < a.length; i++) {
//         if (b[i]) {
//             c[i] = a[i] + b[i];
//         } else {
//             c[i] = a[i];
//         }

//     }
//     return c;
// }

// console.log(sumMas(a, b));


//- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// let mas = [2, 1, 6, 9, 8, 3, 5, 3]


// function change(mas, i) {

//     if (mas[i] && mas[i + 1]) {
//         let x = mas[i + 1];
//         mas[i + 1] = mas[i];
//         mas[i] = x;
//     } else if (mas[i] && !mas[i + 1]) {
//         mas[i + 1] = mas[i];
//         mas[i] = 0;
//     }
//     return mas;
// }

// console.log(change(mas, 7));

// // - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


let mas = [2, 0, 6, 0, 8, 0, 5, 3];


function change(mas, i) {

    if (mas[i] && mas[i + 1]) {
        let x = mas[i + 1];
        mas[i + 1] = mas[i];
        mas[i] = x;
    } else if (mas[i] && !mas[i + 1]) {
        mas[i + 1] = mas[i];
        mas[i] = 0;
    }
    return mas;
}

console.log(change(mas, 7));