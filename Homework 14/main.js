// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// function Tags(title, action, attrs) {
//     this.titleOfTag = title;
//     this.action = action;
//     this.attrs = attrs;
// }

// let a = new Tags('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [{
//         titleOfTag: 'accesskey',
//         actionOfAttr: 'Активация ссылки с помощью комбинации клавиш'
//     },
//     {
//         titleOfTag: 'coords',
//         actionOfAttr: 'Устанавливает координаты активной области'
//     },
//     {
//         titleOfTag: 'download',
//         actionOfAttr: 'Предлагает скачать указанный по ссылке файл'
//     }
// ])
// let div = new Tags('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [{
//         titleOfTag: 'align',
//         actionOfAttr: 'Задает выравнивание содержимого тега <div>'
//     },
//     {
//         titleOfTag: 'title',
//         actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'
//     }
// ])
// let h1 = new Tags('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка', [{
//     titleOfTag: 'align',
//     actionOfAttr: 'Определяет выравнивание заголовка'
// }])
// let span = new Tags('span', 'Тег <span> предназначен для определения строчных элементов документа. ', [{
//         titleOfTag: 'accesskey',
//         actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш'
//     },
//     {
//         titleOfTag: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'
//     }
// ])
// let input = new Tags('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем', [{
//         titleOfTag: 'accesskey',
//         actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'
//     },
//     {
//         titleOfTag: 'accept',
//         actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов'
//     }
// ])
// let form = new Tags('form', 'Тег <form> устанавливает форму на веб-странице', [{
//         titleOfTag: 'action',
//         actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'
//     },
//     {
//         titleOfTag: 'enctype',
//         actionOfAttr: 'Способ кодирования данных формы'
//     }
// ])
// let option = new Tags('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', [{
//         titleOfTag: 'disabled',
//         actionOfAttr: 'Заблокировать для доступа элемент списка'
//     },
//     {
//         titleOfTag: 'label',
//         actionOfAttr: 'Указание метки пункта списка'
//     }
// ])
// let select = new Tags('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее', [{
//         titleOfTag: 'accesskey',
//         actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш'
//     },
//     {
//         titleOfTag: 'autofocus',
//         actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'
//     }
// ])

// console.log(a);
// console.log(div);
// console.log(h1);
// console.log(span);
// console.log(input);
// console.log(form);
// console.log(option);
// console.log(select);

// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// class Tags {

//     constructor(title, action, attrs) {
//         this.titleOfTag = title;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }

// let a = new Tags('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [{
//         titleOfTag: 'accesskey',
//         actionOfAttr: 'Активация ссылки с помощью комбинации клавиш'
//     },
//     {
//         titleOfTag: 'coords',
//         actionOfAttr: 'Устанавливает координаты активной области'
//     },
//     {
//         titleOfTag: 'download',
//         actionOfAttr: 'Предлагает скачать указанный по ссылке файл'
//     }
// ])
// let div = new Tags('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [{
//         titleOfTag: 'align',
//         actionOfAttr: 'Задает выравнивание содержимого тега <div>'
//     },
//     {
//         titleOfTag: 'title',
//         actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'
//     }
// ])
// let h1 = new Tags('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка', [{
//     titleOfTag: 'align',
//     actionOfAttr: 'Определяет выравнивание заголовка'
// }])
// let span = new Tags('span', 'Тег <span> предназначен для определения строчных элементов документа. ', [{
//         titleOfTag: 'accesskey',
//         actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш'
//     },
//     {
//         titleOfTag: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'
//     }
// ])
// let input = new Tags('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем', [{
//         titleOfTag: 'accesskey',
//         actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'
//     },
//     {
//         titleOfTag: 'accept',
//         actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов'
//     }
// ])
// let form = new Tags('form', 'Тег <form> устанавливает форму на веб-странице', [{
//         titleOfTag: 'action',
//         actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'
//     },
//     {
//         titleOfTag: 'enctype',
//         actionOfAttr: 'Способ кодирования данных формы'
//     }
// ])
// let option = new Tags('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', [{
//         titleOfTag: 'disabled',
//         actionOfAttr: 'Заблокировать для доступа элемент списка'
//     },
//     {
//         titleOfTag: 'label',
//         actionOfAttr: 'Указание метки пункта списка'
//     }
// ])
// let select = new Tags('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее', [{
//         titleOfTag: 'accesskey',
//         actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш'
//     },
//     {
//         titleOfTag: 'autofocus',
//         actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'
//     }
// ])

// console.log(a);
// console.log(div);
// console.log(h1);
// console.log(span);
// console.log(input);
// console.log(form);
// console.log(option);
// console.log(select);

// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// CLASS

// let car = {
//     model: 'a4',
//     brand: 'audi',
//     year: 2018,
//     topSpeed: 250,
//     engine: 3.0,

//     drive() {
//         console.log(`їдемо зі швидкістю ${this.topSpeed} на годину`);
//     },

//     info() {
//         console.log(this);
//     },

//     increaseMaxSpeed(newSpeed) {
//         this.topSpeed = newSpeed;
//     },

//     changeYear(newValue) {
//         this.year = newValue;
//     },

//     addDriver(driver) {
//         this.driver = driver;
//     }

// }

// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(220);
// car.changeYear(2020);
// car.addDriver({ name: 'Andriy', age: 25, status: true });
// console.log(car);

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function Car(model, brand, year, topSpeed, engine) {
//     this.model = model;
//     this.brand = brand;
//     this.year = year;
//     this.topSpeed = topSpeed;
//     this.engine = engine;

//     this.drive = function() {
//         console.log(`їдемо зі швидкістю ${this.topSpeed} на годину`);
//     };

//     this.info = function() {
//         console.log(this);
//     };

//     this.increaseMaxSpeed = function(newSpeed) {
//         this.topSpeed = newSpeed;
//     };

//     this.changeYear = function(newValue) {
//         this.year = newValue;
//     };

//     this.addDriver = function(driver) {
//         this.driver = driver;
//     };
// }

// let car1 = new Car('a4', 'audi', 2015, 180, 2.0);

// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(220);
// car1.changeYear(2020);
// car1.addDriver({ name: 'Andriy', age: 25, status: true });
// console.log(car1);

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// class Car {
//     constructor(model, brand, year, topSpeed, engine) {
//         this.model = model;
//         this.brand = brand;
//         this.year = year;
//         this.topSpeed = topSpeed;
//         this.engine = engine;
//     }

//     drive() {
//         console.log(`їдемо зі швидкістю ${this.topSpeed} на годину`);
//     };

//     info() {
//         console.log(this);
//     };

//     increaseMaxSpeed(newSpeed) {
//         this.topSpeed = newSpeed;
//     };

//     changeYear(newValue) {
//         this.year = newValue;
//     };

//     addDriver(driver) {
//         this.driver = driver;
//     };
// }

// let car1 = new Car('a4', 'audi', 2015, 180, 2.0);

// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(220);
// car1.changeYear(2020);
// car1.addDriver({ name: 'Andriy', age: 25, status: true });
// console.log(car1);

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Popelushka {
//     constructor(name, age, legSize) {
//         this.name = name;
//         this.age = age;
//         this.legSize = legSize;
//     }
// }

// let p1 = new Popelushka('Katia', 17, 37);
// let p2 = new Popelushka('Natasha', 16, 38);
// let p3 = new Popelushka('Lesia', 18, 35);
// let p4 = new Popelushka('Natalia', 19, 38);
// let p5 = new Popelushka('Tania', 17, 39);
// let p6 = new Popelushka('Olia', 18, 37);
// let p7 = new Popelushka('Yaruna', 20, 36);
// let p8 = new Popelushka('Lilya', 19, 40);
// let p9 = new Popelushka('Oksana', 16, 35);
// let p10 = new Popelushka('Katia', 19, 41);


// let array = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

// class Prints {
//     constructor(name, age, shoesSize) {
//         this.name = name;
//         this.age = age;
//         this.shoesSize = shoesSize;
//     }
// }

// let pr = new Prints('Andriy', 25, 36);

// for (let arr of array) {
//     if (arr.legSize === pr.shoesSize) {
//         console.log(arr);
//     }
// }


// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// function Popelushka(name, age, legSize) {
//     this.name = name;
//     this.age = age;
//     this.legSize = legSize;

// }

// let p1 = new Popelushka('Katia', 17, 37);
// let p2 = new Popelushka('Natasha', 16, 38);
// let p3 = new Popelushka('Lesia', 18, 35);
// let p4 = new Popelushka('Natalia', 19, 38);
// let p5 = new Popelushka('Tania', 17, 39);
// let p6 = new Popelushka('Olia', 18, 37);
// let p7 = new Popelushka('Yaruna', 20, 36);
// let p8 = new Popelushka('Lilya', 19, 40);
// let p9 = new Popelushka('Oksana', 16, 35);
// let p10 = new Popelushka('Katia', 19, 41);


// let array = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

// class Prints {
//     constructor(name, age, shoesSize) {
//         this.name = name;
//         this.age = age;
//         this.shoesSize = shoesSize;
//     }
// }

// let pr = new Prints('Andriy', 25, 40);

// for (let arr of array) {
//     if (arr.legSize === pr.shoesSize) {
//         console.log(arr);
//     }
// }