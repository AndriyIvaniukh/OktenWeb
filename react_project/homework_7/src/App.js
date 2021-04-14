//  useCallback, memo, useMemo
// import './App.css';
// import React, {useState, memo, useCallback, useMemo} from 'react'
//
//
// // const FirstCounterPOW = (counter1)=>{
// //     console.log('firstPow')
// //     return (counter1*counter1);
// // };
// //
// // const SecondCounterPOW=memo(({counter2})=>{
// //     console.log('secondPOW')
// //     return counter2 * counter2;
// // })
//
// function App() {
//
//
//
//   // const [counter1, setCounter1] = useState(0);
//   // const [counter2, setCounter2] = useState(0);
//   // const [age, setAge] = useState(25);
//   //
//   //   console.log('rerender')
//   //
//   // const incFirstCounter = () =>{
//   //     console.log("IncFirstCounter")
//   //     setCounter1(prev=> prev + 1)
//   // }
//   //   const IncSecondCounter = () =>{
//   //       console.log("IncSecondCounter")
//   //       setCounter2(prev=> prev + 1);
//   //       if(counter2%2===0){
//   //           setAge(prev=>prev+1);
//   //       }
//   //   }
//   //
//   //   const AnotherAge = useCallback(()=>{
//   //       console.log(age, ' - age');
//   //       return age;
//   //   },[age])
//   //
//   //
//   //   const powFirst = useMemo(()=>{return FirstCounterPOW(counter1)},[counter1])
//   //
//   // return (
//   //   <div>
//   //       <div>
//   //         <h3>{counter1} x {counter2} = {counter1*counter2}</h3>
//   //         <button onClick={incFirstCounter}>IncFirstNum</button>
//   //         <button onClick={IncSecondCounter}>IncSecondNum</button>
//   //       </div>
//   //       <div>
//   //           <h3>{powFirst}  - FirstCounterPOW</h3>
//   //           <h3><SecondCounterPOW counter2={counter2} />  - SecondCounterPOW</h3>
//   //       </div>
//   //       <AnotherAge/>
//   //   </div>
//   // );
// }


//homework 6 change useState to useReducer
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import React, {useState, createContext, useContext, useReducer} from 'react'

const TodosContext = createContext();

const initialState ={
    todos: [],
    doneTodosId: [],
}

const reducer = (state, action) =>{
    switch (action.type){
        case 'ADDTODO':
            return {...state, todos: [action.props]}
        default:
            return state;
    }
}
const ContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);
    console.log('ContextProvider')
    const [todos,setTodos] = useState([]);
    const [doneTodosId,setDoneTodosId] = useState([]);

    const changeState = (initialState)=>{
         dispatch({type:'ADDTODO', props: initialState})
        console.log(state, 'dispatch')
    }

    const addTodo = (inputValue) => {
        setTodos([inputValue, ...todos])
    }

    const deleteTodo =(inputValue)=>{
        setTodos(todos.filter(value => value.id !== inputValue.id));
        setDoneTodosId(doneTodosId.filter(el => el!==inputValue.id));
    }

    const markAsDone = (id) =>{
        if(doneTodosId.includes(id)){
            setDoneTodosId(doneTodosId.filter(el => el!==id));
        }else{
            setDoneTodosId([id,...doneTodosId])
        }
    }

    return(
        <TodosContext.Provider value={{
            todos,
            addTodo,
            deleteTodo,
            doneTodosId,
            markAsDone,
            changeState
        }}
        >
            {children}
        </TodosContext.Provider>
    )
}

const Header = () =>{
    console.log('Header')
    const {todos, doneTodosId} = useContext(TodosContext)
    return(
        <header className={'header'}>
            <div className={'headerButtons'}>
                <Link to={'/'}>To do List</Link>
                <Link to={'/addNewTodo'}>Add New To do</Link>
            </div>
            <div className={'headerCounters'}>
                <p>All: {todos.length}</p>
                <p>Done: {doneTodosId.length}</p>
                <p>In process: {todos.length - doneTodosId.length}</p>
            </div>
        </header>
    )
}

const AddNewTodo = () => {
    console.log('AddNewTodo')
    const {todos,addTodo,changeState} = useContext(TodosContext)
    const [inputValue,setInputValue] = useState({
        title: '',
        description: '',
        id: null,
    })

    const inputsOnChange = (e) => {
        const {name,value} = e.target;
        setInputValue({...inputValue, [name]: value})
    }

    const onSubmit =()=>{
        const uuid = uuidv4();
        addTodo({...inputValue, id: uuid});
        setInputValue({
            title: '',
            description: '',
            id: null,
        });
    }
    return(
        <div className={'inputs'}>
            <input value={inputValue.title} onChange={inputsOnChange} type={'text'} name={'title'} placeholder={'add title'}/>
            <input value={inputValue.description} onChange={inputsOnChange} type={'text'} name={'description'} placeholder={'add description'}/>
            <button onClick={onSubmit}>Submit</button>
            <button onClick={()=> changeState(6)}>reducer</button>
        </div>
    )
}

const AllTodoList = () => {
    console.log('AllTodoList')
    const {todos,deleteTodo, doneTodosId, markAsDone} = useContext(TodosContext)
    return(
        <div>
            {todos.map(el =>
                <div className={!doneTodosId.includes(el.id) ? 'todoDiv' : 'mark'} key={el.id}>
                    <h3>{el.title}</h3>
                    <p>{el.description}</p>
                    <button onClick={() => {markAsDone(el.id)}}>{doneTodosId.includes(el.id) ? <p>Mark as Active</p> : <p>Mark as Done</p>}</button>
                    <button onClick={() => deleteTodo(el)}>Delete</button>
                </div>)}
        </div>
    )
}

function App() {

    return (
        <ContextProvider>
            <Router>
                <Header/>
                <Switch>
                    <Route path={'/addNewTodo'}>
                        <AddNewTodo/>
                    </Route>
                    <Route path={'/'}>
                        <AllTodoList/>
                    </Route>
                </Switch>
            </Router>
        </ContextProvider>
    );

}

export default App;
