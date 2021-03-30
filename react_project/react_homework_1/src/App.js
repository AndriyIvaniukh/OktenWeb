import logo from './logo.svg';
import React, {Component} from 'react';
import './components/styleRoz.css'

import './App.css';
import Comp1 from './components/comp1';
import Comp2 from './components/comp2';
import Comp3 from "./components/comp3";
import Comp4 from "./components/comp4";

function App() {


    const user = {name: 'Andriy', lastname: 'Ivaniukh', status: true}
    const expl =[1,3,4,5,6];
    const user2 = [
       {name: 'Andriy', lastname: 'Ivaniukh', status: true},
    {name: 'Lesli', lastname: 'loloshka', status: false}
    ];

    const user3 = [
        {name: 'Andriy', lastname: 'Ivaniukh', status: true},
        {name: 'Lesli', lastname: 'loloshka', status: false},
        {name: 'Andriy', lastname: 'Ivaniukh', status: true},
        {name: 'Lesli', lastname: 'loloshka', status: false},
        {name: 'Andriy', lastname: 'Ivaniukh', status: true},
        {name: 'Lesli', lastname: 'loloshka', status: false},
        {name: 'Andriy', lastname: 'Ivaniukh', status: true},
        {name: 'Lesli', lastname: 'loloshka', status: false},
        {name: 'Andriy', lastname: 'Ivaniukh', status: true},
        {name: 'Lesli', lastname: 'loloshka', status: false}



    ];

    const rozetka={title: "Laptop Asus", body: "Екран 14 IPS (1920x1080) Full HD, матовий / Intel Celeron N4020 (1.1 — 2.8 ГГц) / RAM 4 ГБ / SSD 256 ГБ / Intel UHD Graphics 600 / без ОД / Wi-Fi / Bluetooth / вебкамера / без ОС / 1.3 кг",
   photo:'https://i8.rozetka.ua/goods/21467366/copy_asus_90nb0q11_m17950_600aea6bc9c77_images_21467366333.jpg'
    }

    const arrRozetka = [
        {title: "Laptop Asus", body: "Екран 14 IPS (1920x1080) Full HD, матовий / Intel Celeron N4020 (1.1 — 2.8 ГГц) / RAM 4 ГБ / SSD 256 ГБ / Intel UHD Graphics 600 / без ОД / Wi-Fi / Bluetooth / вебкамера / без ОС / 1.3 кг",
            photo:'https://i8.rozetka.ua/goods/21467366/copy_asus_90nb0q11_m17950_600aea6bc9c77_images_21467366333.jpg'
        },
        {title: "Laptop Asus", body: "Екран 14 IPS (1920x1080) Full HD, матовий / Intel Celeron N4020 (1.1 — 2.8 ГГц) / RAM 4 ГБ / SSD 256 ГБ / Intel UHD Graphics 600 / без ОД / Wi-Fi / Bluetooth / вебкамера / без ОС / 1.3 кг",
            photo:'https://i8.rozetka.ua/goods/21467366/copy_asus_90nb0q11_m17950_600aea6bc9c77_images_21467366333.jpg'
        },
        {title: "Laptop Asus", body: "Екран 14 IPS (1920x1080) Full HD, матовий / Intel Celeron N4020 (1.1 — 2.8 ГГц) / RAM 4 ГБ / SSD 256 ГБ / Intel UHD Graphics 600 / без ОД / Wi-Fi / Bluetooth / вебкамера / без ОС / 1.3 кг",
            photo:'https://i8.rozetka.ua/goods/21467366/copy_asus_90nb0q11_m17950_600aea6bc9c77_images_21467366333.jpg'
        },
        {title: "Laptop Asus", body: "Екран 14 IPS (1920x1080) Full HD, матовий / Intel Celeron N4020 (1.1 — 2.8 ГГц) / RAM 4 ГБ / SSD 256 ГБ / Intel UHD Graphics 600 / без ОД / Wi-Fi / Bluetooth / вебкамера / без ОС / 1.3 кг",
            photo:'https://i8.rozetka.ua/goods/21467366/copy_asus_90nb0q11_m17950_600aea6bc9c77_images_21467366333.jpg'
        },
        {title: "Laptop Asus", body: "Екран 14 IPS (1920x1080) Full HD, матовий / Intel Celeron N4020 (1.1 — 2.8 ГГц) / RAM 4 ГБ / SSD 256 ГБ / Intel UHD Graphics 600 / без ОД / Wi-Fi / Bluetooth / вебкамера / без ОС / 1.3 кг",
            photo:'https://i8.rozetka.ua/goods/21467366/copy_asus_90nb0q11_m17950_600aea6bc9c77_images_21467366333.jpg'
        },
        {title: "Laptop Asus", body: "Екран 14 IPS (1920x1080) Full HD, матовий / Intel Celeron N4020 (1.1 — 2.8 ГГц) / RAM 4 ГБ / SSD 256 ГБ / Intel UHD Graphics 600 / без ОД / Wi-Fi / Bluetooth / вебкамера / без ОС / 1.3 кг",
            photo:'https://i8.rozetka.ua/goods/21467366/copy_asus_90nb0q11_m17950_600aea6bc9c77_images_21467366333.jpg'
        },
        {title: "Laptop Asus", body: "Екран 14 IPS (1920x1080) Full HD, матовий / Intel Celeron N4020 (1.1 — 2.8 ГГц) / RAM 4 ГБ / SSD 256 ГБ / Intel UHD Graphics 600 / без ОД / Wi-Fi / Bluetooth / вебкамера / без ОС / 1.3 кг",
            photo:'https://i8.rozetka.ua/goods/21467366/copy_asus_90nb0q11_m17950_600aea6bc9c77_images_21467366333.jpg'
        },
        {title: "Laptop Asus", body: "Екран 14 IPS (1920x1080) Full HD, матовий / Intel Celeron N4020 (1.1 — 2.8 ГГц) / RAM 4 ГБ / SSD 256 ГБ / Intel UHD Graphics 600 / без ОД / Wi-Fi / Bluetooth / вебкамера / без ОС / 1.3 кг",
            photo:'https://i8.rozetka.ua/goods/21467366/copy_asus_90nb0q11_m17950_600aea6bc9c77_images_21467366333.jpg'
        },
        {title: "Laptop Asus", body: "Екран 14 IPS (1920x1080) Full HD, матовий / Intel Celeron N4020 (1.1 — 2.8 ГГц) / RAM 4 ГБ / SSD 256 ГБ / Intel UHD Graphics 600 / без ОД / Wi-Fi / Bluetooth / вебкамера / без ОС / 1.3 кг",
            photo:'https://i8.rozetka.ua/goods/21467366/copy_asus_90nb0q11_m17950_600aea6bc9c77_images_21467366333.jpg'
        },
        {title: "Laptop Asus", body: "Екран 14 IPS (1920x1080) Full HD, матовий / Intel Celeron N4020 (1.1 — 2.8 ГГц) / RAM 4 ГБ / SSD 256 ГБ / Intel UHD Graphics 600 / без ОД / Wi-Fi / Bluetooth / вебкамера / без ОС / 1.3 кг",
            photo:'https://i8.rozetka.ua/goods/21467366/copy_asus_90nb0q11_m17950_600aea6bc9c77_images_21467366333.jpg'
        },
        {title: "Laptop Asus", body: "Екран 14 IPS (1920x1080) Full HD, матовий / Intel Celeron N4020 (1.1 — 2.8 ГГц) / RAM 4 ГБ / SSD 256 ГБ / Intel UHD Graphics 600 / без ОД / Wi-Fi / Bluetooth / вебкамера / без ОС / 1.3 кг",
            photo:'https://i8.rozetka.ua/goods/21467366/copy_asus_90nb0q11_m17950_600aea6bc9c77_images_21467366333.jpg'
        }
    ]

    return (
    <div>

      <Comp1 name={'Lolol'} id={2}/>
      <Comp2 user={user}/>

        {expl.map(data=><Comp3 value={data}/>)}
        {user2.map(user=><Comp2 user={user}/>)}
        {user3.map(user=><Comp2 user={user}/>)}
        <Comp4 value={rozetka}/>

        <div className='rozetkaApp'>
            {arrRozetka.map(value=><Comp4 value={value}/>)}
        </div>
    </div>
    );
}

export default App;
