// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let array = [16, 3, 59, 7, 5, 6, 8, 90, 3, 22, 7, 44, 15, 24, 36, 22, 11, 44, 55, 31];

// let a = array.sort(function(a, b) {
//     return a - b;
// })
// console.log(a);

// let b = array.sort(function(a, b) {
//     return b - a;
// })
// console.log(b);

// let filter3 = array.filter(a => a % 3 === 0);
// console.log(filter3);

// let filter10 = array.filter(function(a) {
//     return (a % 10) === 0;
// })

// console.log(filter10);

// array.forEach(value => console.log(value));

// let map = array.map(value => value * 3);
// console.log(map);


// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let array = ['Marko', 'Ivan', 'Danulo', 'Andriy', 'Taras', 'Orest', 'Bogdan', 'Vatalik', 'Vasul', 'Artur', 'Petro', 'Evgen', 'Nazar', 'Miroslav'];

// let sort = array.sort((value1, value2) => {
//     if (value1.toLocaleLowerCase() > value2.toLocaleLowerCase()) return 1;
//     if (value1.toLocaleLowerCase() < value2.toLocaleLowerCase()) return -1;
//     return 0;
// });
// console.log(sort);


// let sort1 = array.sort((value1, value2) => {
//     if (value1.toLocaleLowerCase() > value2.toLocaleLowerCase()) return -1;
//     if (value1.toLocaleLowerCase() < value2.toLocaleLowerCase()) return 1;
//     return 0;
// });
// console.log(sort1);

// let filter = array.filter(value => value.length <= 4);
// console.log(filter);

// let map = array.map(value => value + '!');
// console.log(map);


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];

// let users = [{ name: 'vasya', age: 31, status: false }, { name: 'petya', age: 30, status: true }, { name: 'kolya', age: 29, status: true }, { name: 'olya', age: 28, status: false }, { name: 'max', age: 30, status: true }, { name: 'anya', age: 31, status: false }, { name: 'oleg', age: 28, status: false }, { name: 'andrey', age: 29, status: true }, { name: 'masha', age: 30, status: true }, { name: 'olya', age: 31, status: false }, { name: 'max', age: 31, status: true }];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
// users.sort((a, b) => a.age - b.age);
// console.log(users);

// let sort2 = users.sort((a, b) => -a.age + b.age);
// console.log(users);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// users.sort((a, b) => a.name.length - b.name.length);
// console.log(users);

// users.sort((a, b) => b.name.length - a.name.length);
// console.log(users);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// let map = users.map((value, index) => {
//     value.id = index;
//     return value;
// });
// console.log(map);

// // - відсортувати його за індентифікатором

// users.sort((a, b) => b.id - a.id);
// console.log(users);



// -- наисать функцию калькулятора с 2мя числами и колбеком

// function calculator(a, b, callback) {
//     return callback(a, b);
// }

// console.log(calculator(2, 3, (a, b) => a + b));
// console.log(calculator(2, 3, (a, b) => a * b));
// console.log(calculator(2, 3, (a, b) => a / b));
// -- наисать функцию калькулятора с 3мя числами и колбеком


// function calculator(a, b, c, callback) {
//     return callback(a, b, c);
// }

// console.log(calculator(20, 30, 5, (a, b, c) => (a + b) / c));
// console.log(calculator(20, 30, 5, (a, b, c) => (a * b) / c));
// console.log(calculator(20, 3, 5, (a, b, c) => (a / b) * c));