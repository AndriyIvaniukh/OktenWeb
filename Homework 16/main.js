// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, 
// чтобы при клике на кнопку исчезал элемент с id="text".

// let button = document.getElementById('butt');

// button.onclick = function() {
//         let a = document.getElementById('text');
//         a.style.display = 'none';
//     }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.getElementById('butt');

// button.onclick = function() {
//     this.style.display = 'none';
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let button = document.getElementById('readText');

// button.onclick = function() {
//         let inp = document.getElementById('inp').value;

//         if (inp < 18) {
//             alert("Less then 18");
//         } else {
//             console.log('good');
//         }
//     }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     { title: 'lorem1', body: '1lorem ipsum dolo sit ameti' },
//     { title: 'lorem2', body: '2lorem ipsum dolo sit ameti' },
//     { title: 'lorem3', body: '3lorem ipsum dolo sit ameti' },
//     { title: 'lorem4', body: '4lorem ipsum dolo sit ameti' },
//     { title: 'lorem5', body: '5lorem ipsum dolo sit ameti' },
//     { title: 'lorem6', body: '6lorem ipsum dolo sit ameti' },
//     { title: 'lorem7', body: '7lorem ipsum dolo sit ameti' },
//     { title: 'lorem8', body: '8lorem ipsum dolo sit ameti' },
//     { title: 'lorem9', body: '9lorem ipsum dolo sit ameti' },
// ]

// let div = document.createElement('div');

// for (let comment of comments) {
//     let div1 = document.createElement('div');
//     let h3 = document.createElement('h3');
//     let p = document.createElement('p');
//     let button = document.createElement('button');
//     button.innerText = 'Скрить';
//     button.id = 'butn';

//     let i = 1;
//     button.onclick = function() {
//         if (i % 2) {
//             p.style.display = 'none';
//             i++;
//             button.innerText = 'Открить';
//         } else {
//             p.style.display = 'block';
//             i++;
//             button.innerText = 'Скрить';
//         }
//     }

//     h3.innerText = comment.title;
//     p.innerText = comment.body;
//     div1.appendChild(h3);
//     div1.appendChild(p);
//     div1.appendChild(button);
//     div.appendChild(div1);
// }

// document.body.appendChild(div);



// ***- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let array = ['shit', 'bitch', 'fuck'];


// let button = document.getElementById('readText');

// button.onclick = function() {
//     let getText = document.getElementById('inp').value;
//     array.filter(a => a === getText).forEach(a => alert(`${a} !!!!!`));

// }