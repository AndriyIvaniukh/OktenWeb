// 1) Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)».
// Если аргументы не заданы, считать их равными нулю.

// function rgb() {
//     if (!arguments[0]) {
//         arguments[0] = 0;
//     }
//     if (!arguments[1]) {
//         arguments[1] = 0;
//     }
//     if (!arguments[2]) {
//         arguments[2] = 0;
//     }
//     let s = `rgb(${arguments[0]},${arguments[1]},${arguments[2]})`;
//     return s;
// }

// console.log(rgb(1));

// 2) создать функцию которая будет принимать два массива:
// - с ключами
// - с значениями
// и будет возвращать объект полученный в результате склеивания этих двух массивов
// пример:
// zip(['name', 'age', 'status'], ['Kira', 12, false])  —>  { name: 'Kira', age: 12, status: false }

// let array1 = ['name', 'age', 'status'];
// let array2 = ['Kira', 12, false];

// function twoArrayToObj(arr1, arr2) {

//     let obj = {};
//     for (let i = 0; i < arr1.length; i++) {
//         obj[`${arr1[i]}`] = arr2[i];
//     }

//     return obj;
// }

// console.log(array1);
// console.log(array2);

// console.log(twoArrayToObj(array1, array2));


// 3) создать функцию которая будет принимать любое количество чисел,
// и будет возвращать массив без дубликатов uniq(1, 2, 2, 3, 4, 2, 4, 5) —> [1,2,3,4,5]


// function myFunc() {
//     let mark = true;
//     let array = [];
//     array.push(arguments[0]);

//     for (let a of arguments) {
//         mark = true;
//         for (let arr of array) {
//             if (arr === a) {
//                 mark = false;
//                 break;
//             }
//         }
//         if (mark) {
//             array.push(a);
//         }
//     }

//     return array;
// }


// console.log(myFunc(1, 1, 2, 3, 3, 4, 4, 4, 4, 2, 4, 4, 5, 6, 7, 7, 7, 8, 3, 3, 2, 2));


// 4) создать функцию которая принимает число (высоту) и делает половину пирамидки (как в игре марио)

// function myFunc(n) {
//     let prob = " ";
//     let zirk = "*"
//     let line = "";
//     for (let l = 0; l < n; l++) {
//         line = "";
//         for (let i = 1; i < (n - l); i++) {
//             line += prob;
//         }
//         for (let i = 0; i <= l; i++) {
//             line += zirk;
//         }

//         console.log(line);
//     }
// }


// myFunc(50);