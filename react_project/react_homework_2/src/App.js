
import './App.css';
import React, {Component} from 'react';
import Component1 from "./components/component1";
import {useState} from 'react'
import {bindReporter} from "web-vitals/dist/modules/lib/bindReporter";


// 1 відмалювати список карточок базуючись на якомусь створеному вами масиві створити окрему кнопку, яка буде видаляти
// поточний перший елемент (або останній)  якщо у нас масив з 3 елементів і ми клікнули на кнопку 3 рази,
// то на екрані жодна карточка не має відмалюватись  (кнопки повернення до початкового стану не треба)
//
// 2 те саме, тільки з кнопкою реверт (повернутись до стану, де у нас видно 3 елемнети, як на початку)
//
// 3   задача з зірочкою) кожна карточка з завдання вище має мати кнопку, по кліку на яку, ми видаляємо зі
// списку саме її + реверт кнопка, щоб вернути все назад (ця кнопка одна дня всіх карточок, клікнули по ній
// і всі каркти вернулись назазд) (згадування функції фільтр в лекції було не просто так)
//
// 4   написати тогл компоненту, яка буде ховати або показувати елемент приклад з візуалкою тут
// https://material-ui.com/components/switches/#customized-switches

function App() {
    const [array, setArray] = useState([
        {id:1, name: 'Andriy', age:25, visible:true},
        {id:2, name: 'Taras', age:22, visible:true},
        {id:3, name: 'Roman', age:27, visible:true},
    ])
    const [counter, setCounter] = useState(0);

  const cardVisible = () => {
      if(counter<array.length){
        let arr = [...array];
        arr[counter].visible=!arr[counter].visible;
      setArray(arr);

      setCounter(counter +1);
      }
  }

  const revertCard = () => {
      let arr = [...array];
      arr.map(value => value.visible = true);
      setArray(arr);
      setCounter(0);

  }

  const deleteCard = (id) => {
      let arr= [...array];
      arr.filter(value => value.id === id).map(value => value.visible = !value.visible);
      setArray(arr);
  }

  const printArr =(value)=>{
      if(value.visible){return(
              <div key={value.id} className={'card'}>
                  <br/>
                  {<button onClick={()=>deleteCard(value.id)}>Delete</button>}
                  <p>{value.name}</p>
                  <p>{value.age}</p>
              </div>)
      }
  else
      { return (
          <div key={value.id} className={'card'}>
              <br/>
              {<button onClick={()=>deleteCard(value.id)}>Return</button>}
          </div>
          )

      }
  }
  return (
      <>
          {<button onClick={cardVisible}>Delete first card</button>}
          {<button onClick={revertCard}>Revert</button>}

         <div className={'mainBody'}>
             {array.map(value => printArr(value))}
    </div>
      </>
  );
}

export default App;





// 1-2 завдання перша спроба
// function App() {
//     const [array, setArray] = useState([
//         {id:1, name: 'Andriy', age:25, visible:true},
//         {id:2, name: 'Taras', age:22, visible:true},
//         {id:3, name: 'Roman', age:27, visible:true},
//     ])
//     const [counter, setCounter] = useState(0);
//
//     const cardVisible = () => {
//         if(counter<array.length){
//             let arr = [...array];
//             arr[counter].visible=!arr[counter].visible;
//             setArray(arr);
//
//             setCounter(counter +1);
//         }
//     }
//
//     const revertCard = () => {
//         let arr = [...array];
//         arr.map(value => value.visible = true);
//         setArray(arr);
//         setCounter(0);
//
//     }
//
//     return (
//         <>
//             {<button onClick={cardVisible}>Delete first card</button>}
//             {<button onClick={revertCard}>Revert</button>}
//
//             <div className={'mainBody'}>
//                 {array.map(value => (
//                     value.visible &&(
//                         <div className={'card'}>
//                             <p>{value.id}</p>
//                             <p>{value.name}</p>
//                             <p>{value.age}</p>
//                             <br/>
//                             <br/>
//                         </div>)
//
//                 ))}
//             </div>
//         </>
//     );
// }
