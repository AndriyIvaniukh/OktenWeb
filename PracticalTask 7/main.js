// - Создайте меню, которое раскрывается/сворачивается при клике

// let button = document.getElementById('button');
// let menu = document.getElementById('menu');
// let height;
// height = +getComputedStyle(menu).height.replace('px', '');
// let i = 0;

// button.onclick = function() {
//     if (i % 2 == 0) {
//         menu.style.height = 50 + 'px';
//         i++;
//     } else {
//         menu.style.height = height + 'px';
//         i++;
//     }

// }

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let button = document.getElementById('button');

// button.onclick = function() {
//     let inputs = document.getElementsByTagName('input');
//     for (let input of inputs) {
//         console.log(input.value);
//     }
// }


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let button = document.getElementById('button');

// button.onclick = function() {
//     let column = +document.getElementById('f1').value;
//     let row = +document.getElementById('f2').value;
//     let value = document.getElementById('f3').value;

//     let table = document.createElement('table');

//     for (let i = 0; i < column; i++) {
//         let tr = document.createElement('tr');
//         for (let k = 0; k < row; k++) {
//             let td = document.createElement('td');
//             td.innerText = value;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);

//     }


//     document.body.appendChild(table);
// }