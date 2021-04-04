
import React, {useState} from "react";
import './App.css';


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

const endUrl = ['posts', 'comments', 'photos', 'todos', 'albums', 'users'];
const URL = 'https://jsonplaceholder.typicode.com/';



function App() {
    const [userData, setUserData] = useState(
        {
            urlPart: '',
            index: '',
        }
    )
    const [arrayResponce,setArrayResponce] = useState();
    const [singleResponce,setSingleResponce] = useState();
    const [error,setError] = useState('');

    const fetchFromUrl = async () =>{
        const responce = await fetch(`${URL}${userData.urlPart.toLowerCase().trim()}/${userData.index.trim() }`);
        const json = await responce.json();

        userData.index ? setSingleResponce(json) : setArrayResponce(json);
    }

  const onSabmit = () =>{
      setArrayResponce('');
      setSingleResponce('');
      setError('');
      if(!endUrl.includes(userData.urlPart.toLowerCase().trim()) || !userData.urlPart){
          setError('Use available value!!!');
          return;
      }
      if (!Number(userData.index) && userData.index!=='') {
          setError('Use number 1,2,3...99,100')
          return;
      }
      if( (userData.index<1 || userData.index>100) && userData.index!==''){
          setError('Use number 1,2,3...99,100')
          return;
      }
      fetchFromUrl();
      setUserData({...userData,
          urlPart: '',
          index: '',
      })

  }

  const updateInput = (e) => {
      const {target: {value,name}} =e;
      setUserData({...userData, [name]: value});
  }

  return (
    <div>
        <div className={'inputs'}>
            <input value={userData.urlPart} onChange={updateInput} name={'urlPart'} placeholder={'posts, comments, etc.'}/>
            <br/>
            <br/>
            <input value={userData.index} onChange={updateInput} name={'index'} placeholder={'index'}/>
            <br/>
            <br/>
            <button onClick={onSabmit}>Submit</button>

        </div>
            <div>
                <pre>
                    {error && (<div><h3>{error}</h3></div>)}
                    {singleResponce && (<div>{singleResponce.title} - {singleResponce.id}</div>)}
                    {arrayResponce && arrayResponce.map(value => (<div>{value.title} - {value.id}</div>) )}
                </pre>
            </div>
    </div>
  );
}

export default App;
