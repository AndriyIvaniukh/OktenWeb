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

// let str = 'hello';
// let i = 0;

// function getRandom() {
//     let val = Math.random() * 1000;
//     // console.log(val);
//     return val;
// }

// function myPromis(resolve) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(str[i]);
//             i++;
//         }, getRandom());
//     });
// }

// new Promise(resolve => {
//         setTimeout(() => {
//             resolve(str[i]);
//             i++;
//         }, getRandom());
//     })
//     .then(value => {
//         console.log(value);
//         return myPromis(str[i])
//     })
//     .then(value => {
//         console.log(value);
//         return myPromis(str[i])
//     })
//     .then(value => {
//         console.log(value);
//         return myPromis(str[i])
//     })
//     .then(value => {
//         console.log(value);
//         return myPromis(str[i])
//     })
//     .then(value => {
//         console.log(value);
//     });

// -за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.
//  За допомогою document.createElement вивести їх в браузер. 
//  Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).

// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(value => value.json())
//     .then(values => {
//         let div = document.createElement('div');

//         for (let user of values) {
//             let div1 = document.createElement('div');
//             div1.innerText = `id - ${user.id}, name - ${user.name},  email - ${user.email}`;
//             div.appendChild(div1);
//         }

//         document.body.appendChild(div);
//     });

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

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(posts => fetch(`https://jsonplaceholder.typicode.com/comments?postId=` + posts.id))
    .then(response => response.json())
    .then(comment => {
        let div = document.createElement('div');

        let div1 = document.createElement('div');
        let h03 = document.createElement('h3');
        // let h13 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');

        // h13.innerText = `post ${posts[0]}`
        h03.innerText = `id - ${comment.id}`;
        p1.innerText = `name - ${comment.name}`;
        p2.innerText = `body - ${comment.body}`;

        div1.appendChild(h03);
        // div1.appendChild(h13);
        div1.appendChild(p1);
        div1.appendChild(p2);
        div.appendChild(div1);


        document.body.appendChild(div);
    });