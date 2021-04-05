
import React, {useRef, useState, useEffect} from "react";


// дз  створти 2 інтупи і кнопку
// перший відповідає за ендпоінт джсон плейсхолдера (перша частина енпоніту)
// другий- за айдішнік  якщо другого ендпоінту нема- тягнемо весь список
// потрібно зробити валідацію на перший інпут- чи ендпоінт існуючий
// на другий- чи це число і чи воно в рамках 1-100
// зробити версію на функціональній компоненті контрольовану і не контрольовану
// якщо є час- на класовій компоненті теж таке саме написати

// друга частина дз
// inputs (for each create 2 versions- class based and functional based)

// create controlled and uncontrolled select component
// create controlled and uncontrolled checkbox
// create controlled and uncontrolled radio

const availableValue = ['posts', 'comments', 'photos', 'todos', 'albums', 'users'];
const URL = 'https://jsonplaceholder.typicode.com/';


function App() {
    const [value, setValue] = useState('');
    const [values, setValues] = useState('');
    const endUrl = useRef();
    const id = useRef();

    const startFetch = async (inp1,inp2) => {
        const responce = await fetch(`${URL}${inp1}/${inp2}`);
        const json = await responce.json();
        console.log(json)
        inp2!=='' ? setValue(json) : setValues(json);
    }


    const checkCorrect = (inp1, inp2) => {
        if(!availableValue.includes(inp1.trim().toLowerCase())){
            console.error('Bad first inputs, try another values');
            return
        }
        if((inp2<1 || inp2>100) && inp2 !== ''){
            console.error('Bad second inputs, try another values');
            return;
        }

        startFetch(inp1,inp2);

        endUrl.current.value = '';
        id.current.value = '';
        console.log('Good');
    }

    const onSabmit = (e) =>{
        setValue('');
        setValues('');
        e.preventDefault();
        const inp1 = endUrl.current.value;
       const inp2 = id.current.value;

       checkCorrect(inp1, inp2);

    }
  return (
    <div>
        <div className={'inputs'}>
            <form onSubmit={onSabmit}>
            <input  ref={endUrl} name={'endUrl'} type={'text'} placeholder={'posts, comments, etc.'}/>
            <br/>
            <br/>
            <input  ref={id} name={'id'} type={'number'} placeholder={'index'}/>
            <br/>
            <br/>
            <button type={'submit'}>Submit</button>
            </form>

        </div>
            <div>

                    <>
                    {value && (<>{value.title} - {value.id}</>)}
                    {values && (values.map(value => (<pre key={value.id}>{value.title} - {value.id}</pre>)))}
                    {/*{singleResponce && (<div>{singleResponce.title} - {singleResponce.id}</div>)}*/}
                    {/*{arrayResponce && arrayResponce.map(value => (<div>{value.title} - {value.id}</div>) )}*/}
                    </>

            </div>
    </div>
  );
}

export default App;


//Controlled

// function App() {
//     const [userData, setUserData] = useState(
//         {
//             urlPart: '',
//             index: '',
//         }
//     )
//     const [arrayResponce,setArrayResponce] = useState();
//     const [singleResponce,setSingleResponce] = useState();
//     const [error,setError] = useState('');
//
//     const fetchFromUrl = async () =>{
//         const responce = await fetch(`${URL}${userData.urlPart.toLowerCase().trim()}/${userData.index.trim() }`);
//         const json = await responce.json();
//
//         userData.index ? setSingleResponce(json) : setArrayResponce(json);
//     }
//
//   const onSabmit = () =>{
//       setArrayResponce('');
//       setSingleResponce('');
//       setError('');
//       if(!endUrl.includes(userData.urlPart.toLowerCase().trim()) || !userData.urlPart){
//           setError('Use available value!!!');
//           return;
//       }
//       if (!Number(userData.index) && userData.index!=='') {
//           setError('Use number 1,2,3...99,100')
//           return;
//       }
//       if( (userData.index<1 || userData.index>100) && userData.index!==''){
//           setError('Use number 1,2,3...99,100')
//           return;
//       }
//       fetchFromUrl();
//       setUserData({...userData,
//           urlPart: '',
//           index: '',
//       })
//
//   }
//
//   const updateInput = (e) => {
//       const {target: {value,name}} =e;
//       setUserData({...userData, [name]: value});
//   }
//
//   return (
//     <div>
//         <div className={'inputs'}>
//             <input value={userData.urlPart} onChange={updateInput} name={'urlPart'} placeholder={'posts, comments, etc.'}/>
//             <br/>
//             <br/>
//             <input value={userData.index} onChange={updateInput} name={'index'} placeholder={'index'}/>
//             <br/>
//             <br/>
//             <button onClick={onSabmit}>Submit</button>
//
//         </div>
//             <div>
//                 <pre>
//                     {error && (<div><h3>{error}</h3></div>)}
//                     {singleResponce && (<div>{singleResponce.title} - {singleResponce.id}</div>)}
//                     {arrayResponce && arrayResponce.map(value => (<div>{value.title} - {value.id}</div>) )}
//                 </pre>
//             </div>
//     </div>
//   );
// }
//
// export default App;


//
// function App() {
//     const [choise, setChoise] = useState('lime');
// const [radio, setRadio] =useState('Male')
//     const onChange =(e)=>{
//         const {target: {value}} = e;
//         console.log(value)
//         setChoise(value);
//     }
//
//     const changeCheckBox=(e) => {
//         const {target:{value, checked}} = e;
//
//         console.log(value , checked)
//     }
//
//     const changeRadio = (e) => {
//         const {target: {value}} = e;
//         console.log(value)
//             }
//
//   return (
//     <div>
//         <div onChange={changeRadio}>
//         <input onChange={(e) => setRadio(e.target.value)} type="radio" value="Male" name="gender" /> Male
//         <input onChange={(e) => setRadio(e.target.value)} type="radio" value="Female" name="gender" /> Female
//         <input onChange={(e) => setRadio(e.target.value)} type="radio" value="Other" name="gender" /> Other
//         </div>
//         <br/><br/>
//         <input value="fist" type="checkbox" onChange={changeCheckBox}/>
// <br/><br/>
//       <select value={choise} onChange={onChange}>
//         <option value="gray">Грейпфрут</option>
//         <option value="lime">Лайм</option>
//         <option value="cocos">Кокос</option>
//         <option value="mango">Манго</option>
//       </select>
//         {choise}
//         {radio}
//     </div>
//   );
// }
//
// export default App;

