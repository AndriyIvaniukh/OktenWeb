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

// let array = [0, 0, 0, 0, 0, 0, 0, 1, 0];

// function zeroMove(a) {
//     let mas = [];
//     mas = a;
//     for (let i = 0; i < mas.length; i++) {
//         if (mas[i] === 0 && mas[i + 1]) {
//             mas.push(mas[i]);
//             mas[i] = mas[i + 1];
//             mas.splice((i + 1), 1);
//             i = i - 2;
//         }
//     }
//     return mas;
// }


// console.log(zeroMove(array));

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// function printTextBody(a) {
//     document.body.innerText = a;
// }

// printTextBody("Hello owu");

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи


// function printTextBody(type, a) {
//     let t = document.createElement(`${type}`);
//     t.innerText = a;
//     document.body.appendChild(t);
// }

// printTextBody('div', 'Hello owu');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

// let cars = [{
//         brand: 'BMW',
//         model: '528',
//         year: 2016,
//         color: 'black'
//     },

//     {
//         brand: 'audi',
//         model: 'a4',
//         year: 2018,
//         color: 'red'
//     },

//     {
//         brand: 'Mercedes',
//         model: 'e200',
//         year: 2020,
//         color: 'yellow'
//     },

//     {
//         brand: 'VW',
//         model: 'Golf',
//         year: 2014,
//         color: 'gray'
//     },

//     {
//         brand: 'Porshe',
//         model: 'carrera',
//         year: 2021,
//         color: 'yellow'
//     },
//     {
//         brand: 'Opel',
//         model: 'Insignia',
//         year: 2013,
//         color: 'gray'
//     },
//     {
//         brand: 'Citroen',
//         model: 'c3',
//         year: 2011,
//         color: 'blue'
//     },
//     {
//         brand: 'Peugeot',
//         model: '308',
//         year: 2014,
//         color: 'gray'
//     },
//     {
//         brand: 'renault',
//         model: 'daster',
//         year: 2018,
//         color: 'brown'
//     },
//     {
//         brand: 'VW',
//         model: 'Golf',
//         year: 2013,
//         color: 'gray'
//     },
// ];

// function printCars(cars) {
//     let div = document.createElement('div');
//     for (let car of cars) {
//         let div_ = document.createElement('div');
//         div_.innerText = ` ${car.brand}, ${car.model}, ${car.year}, ${car.color}`;
//         console.log(car.brand);
//         div.appendChild(div_);
//     }

//     document.body.appendChild(div);
// }

// printCars(cars);


// // - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// function printCars(cars) {
//     let div = document.createElement('div');
//     for (let car of cars) {
//         let div_ = document.createElement('div');
//         let div_brand = document.createElement('div');
//         let div_model = document.createElement('div');
//         let div_year = document.createElement('div');
//         let div_color = document.createElement('div');
//         div_brand.innerText = car.brand;
//         div_model.innerText = car.model;
//         div_year.innerText = car.year;
//         div_color.innerText = car.color;
//         div_.appendChild(div_brand);
//         div_.appendChild(div_model);
//         div_.appendChild(div_year);
//         div_.appendChild(div_color);
//         div.appendChild(div_);
//     }

//     document.body.appendChild(div);
// }

// printCars(cars);

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:


// let usersWithId = [{ id: 1, name: 'vasya', age: 31, status: false }, { id: 2, name: 'petya', age: 30, status: true }, { id: 3, name: 'kolya', age: 29, status: true }, { id: 4, name: 'olya', age: 28, status: false }, ];
// let citiesWithId = [{ user_id: 3, country: 'USA', city: 'Portland' }, { user_id: 1, country: 'Ukraine', city: 'Ternopil' }, { user_id: 2, country: 'Poland', city: 'Krakow' }, { user_id: 4, country: 'USA', city: 'Miami' }, ];

// function connectArray(arr1, arr2) {
//     for (let a1 of arr1) {
//         for (let a2 of arr2) {
//             if (a1.id === a2.user_id) {
//                 a1.addres = a2;
//             }
//         }

//     }
//     return arr1;
// }

// let a = connectArray(usersWithId, citiesWithId);
// console.log(a);


// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [{
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },

// ];



// // <
// // div id = "wrap" >
// //     <
// //     div class = "rules rule1" >
// //     <
// //     h2 > Первое правило Бойцовского клуба. < /h2> <
// //     p > Никому не рассказывать о Бойцовском клубе. < /p> <
// //     /div>


// function myFunc(rules) {
//     let wrap = document.createElement("div");
//     wrap.id = 'wrap';

//     for (let i = 0; i < rules.length; i++) {
//         let div = document.createElement("div");
//         div.className = `rules rule${i+1}`;
//         let h2 = document.createElement("h2");
//         h2.innerText = rules[i].title;
//         let p = document.createElement("p");
//         p.innerText = rules[i].body;
//         div.appendChild(h2);
//         div.appendChild(p);

//         wrap.appendChild(div);
//     }

//     document.body.appendChild(wrap);
// }

// myFunc(rules);



//  Додаткові від Віктора 

// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!


// function myFunc(n, k) {
//     if (!k) {
//         k = 2;
//     }
//     k *= k;
//     if (k > n) {
//         console.log('no');
//         return;
//     } else if (n === k) {
//         console.log('yes');
//         return;
//     }

//     myFunc(n, k)

// }


// myFunc(16);


// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

// let array = [2, 4, 33, 6];

// let newArray = [];

// function deepCopy(array, newArray, i) {
//     if (array[i]) {
//         console.log(array[i]);
//         newArray[i] = array[i];
//         i++;
//         deepCopy(array, newArray, i);
//         //return newArray;
//     } else {

//         console.log(newArray);
//         return newArray;
//     }

// }

// let copy = deepCopy(array, newArray, 0);
// // copy[2] = 3;
// console.log(array);
// console.log(copy);


let obj = [{
        name: "Kolia",
        age: 24,
        status: true
    },
    {
        name: "Kolia",
        age: 24,
        status: true
    }
]

for (let a of obj) {
    console.log(a);
    console.log(Object.keys(a));
}
for (let a in obj) {
    console.log(a);
}




// // 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]

// let array = [1, 3, ['Hello', 'Wordd', [9, 6, 1, ["uhu", 1, ["lol"]]]],
//     ['oops'], 9
// ];
// let array1 = [];

// function arrayOneLine(array, array1) {
//     for (let arr of array) {
//         if (arr[0] && typeof(arr) != 'string') {
//             array1 = arrayOneLine(arr, array1);
//         } else {
//             array1.push(arr);
//         }
//     }
//     return array1;
// }

// arrayOneLine(array, array1);

// console.log(array);
// console.log(array1);