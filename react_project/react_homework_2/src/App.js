
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
        {id:1, name: 'Andriy', age:25},
        {id:2, name: 'Taras', age:22},
        {id:3, name: 'Roman', age:27},
    ])

    let [elementsToHide,setElementsToHide] = useState([]);

  const cardVisible = (value) => {
      const itemsToRemove = value;
      if(itemsToRemove){
        setElementsToHide([...elementsToHide, itemsToRemove.id]);
      }
  }

  const revertCard = () => {
        setElementsToHide([]);
  }

    const revertCardById = (value) => {
        const arrCopy = [...elementsToHide];
        const arrUpdate = arrCopy.filter(value1 => value1!=value);
        setElementsToHide(arrUpdate);
    }


  const printArr = (value)=>{
      return(
          <div className={'mainCard'}>
              <div className={'card'}>
                  <br/>
                  <p>{value.name}</p>
                  <p>{value.age}</p>
              </div>
      {<button className={'cardButton'} onClick={()=>cardVisible(value)}>Delete first card</button>}
          </div>
      )

    }

    const printIfRemove =() => {
        if(elementsToHide){
            return(
                <>
                {elementsToHide.sort().map(value => <button className={'cardButton'} onClick={() => revertCardById(value)}>Restore - {value}</button>)}
                </>
            )
        }
    }

    const filterElements = array.filter(value => !elementsToHide.includes(value.id));
  return (
      <>
          <div className={'classButtom'}>

          {<button onClick={revertCard}>Revert</button>}
          </div>
         <div className={'mainBody'}>
             {printIfRemove()}
             {filterElements.map(value => printArr(value))}

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
