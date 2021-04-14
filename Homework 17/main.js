// - Реалізувати друкарську машинку. 
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері. 
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером. 
// Приклад: "Hello"
// Затримки: 
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)


// const button = document.getElementById("submit");

// button.onclick = function() {
//     const input = document.getElementById("input");
//     const str = input.value;
//     stringArrayToChar(str);
// }

// async function stringArrayToChar(str) {
//     for (let ch of str) {
//         const a = await startPrint(ch);
//         const p = document.getElementById("print");
//         p.innerText += a + ' ';
//     }
// }

// startPrint = (ch) => {
//     return new Promise(resolve => setTimeout(() => resolve(ch), Math.random() * 1000))

// }


// - за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. 
// За допомогою document.createElement вивести їх в браузер. 
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).


// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(value => value.json())
//     .then(values => {
//         let div = document.createElement('div');

//         for (let post of values) {
//             let div1 = document.createElement('div');
//             let h3 = document.createElement('h3');
//             let p1 = document.createElement('p');
//             let p2 = document.createElement('p');

//             h3.innerText = `id - ${post.id}`;
//             p1.innerText = `title - ${post.title}`;
//             p2.innerText = `body - ${post.body}`;

//             div1.appendChild(h3);
//             div1.appendChild(p1);
//             div1.appendChild(p2);
//             div.appendChild(div1);
//         }

//         document.body.appendChild(div);
//     });


// - за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. 
// За допомогою document.createElement вивести їх в браузер. 
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

// fetch(`https://jsonplaceholder.typicode.com/comments`)
//     .then(value => value.json())
//     .then(values => {
//         let div = document.createElement('div');

//         for (let comment of values) {
//             let div1 = document.createElement('div');
//             let h3 = document.createElement('h3');
//             let p1 = document.createElement('p');
//             let p2 = document.createElement('p');

//             h3.innerText = `id - ${comment.id}`;
//             p1.innerText = `name - ${comment.name}`;
//             p2.innerText = `body - ${comment.body}`;

//             div1.appendChild(h3);
//             div1.appendChild(p1);
//             div1.appendChild(p2);
//             div.appendChild(div1);
//         }

//         document.body.appendChild(div);
//     });

// -при помощи fetch (как в примере) получить от jsonplaceholder все posts. 
// Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. 
// Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. 
// Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(response => response.json())
//     .then(posts => {
//         let div = document.createElement('div');
//         for (let post of posts) {
//             let postDiv = document.createElement('div');
//             let postH3 = document.createElement('h3');
//             let postP1 = document.createElement('p');
//             let postP2 = document.createElement('p');

//             postH3.innerText = `id - ${post.id}`;
//             postP1.innerText = `title - ${post.title}`;
//             postP2.innerText = `body - ${post.body}`;

//             postDiv.appendChild(postH3);
//             postDiv.appendChild(postP1);
//             postDiv.appendChild(postP2);
//             fetch(`https://jsonplaceholder.typicode.com/comments?postId=` + post.id)
//                 .then(response => response.json())
//                 .then(comments => {
//                     let commentDiv = document.createElement('div');

//                     for (let comment of comments) {
//                         let div1 = document.createElement('div');
//                         let h3 = document.createElement('h3');
//                         let p1 = document.createElement('p');
//                         let p2 = document.createElement('p');

//                         h3.innerText = `postId - ${comment.postId}`;
//                         p1.innerText = `name - ${comment.name}`;
//                         p2.innerText = `body - ${comment.body}`;

//                         div1.appendChild(h3);
//                         div1.appendChild(p1);
//                         div1.appendChild(p2);
//                         commentDiv.appendChild(div1);

//                     }
//                     postDiv.appendChild(commentDiv);
//                 })
//             div.appendChild(postDiv);

//         }
//         document.body.appendChild(div);


//     });