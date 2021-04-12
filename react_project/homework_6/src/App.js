import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import React, {useState, createContext, useContext} from 'react'

const TodosContext = createContext();

const ContextProvider = ({children}) => {
    const [todos,setTodos] = useState([]);
    const [counter, setCounter] = useState(0);
    const [doneCounter, setDoneCounter] = useState(0);

    const incDoneCounter = () =>{
        setCounter(counter +1);
    }

    const decDoneCounter = () =>{
        setCounter(counter -1);
    }

    const incCounter = () =>{
        setCounter(counter +1);
    }

    const decCounter = () =>{
        setCounter(counter -1);
    }

    const addTodo = (inputValue) => {
        setTodos([inputValue, ...todos])
    }

    return(
        <TodosContext.Provider value={{
            todos,
            addTodo,
            setTodos,
            counter,
            doneCounter,
            incCounter,
            decCounter,
            incDoneCounter,
            decDoneCounter,
        }}
        >
            {children}
        </TodosContext.Provider>
    )
}

const Header = () =>{
    const {counter,doneCounter} = useContext(TodosContext)
    return(
        <header className={'header'}>
            <div className={'headerButtons'}>
                <Link to={'/'}>To do List</Link>
                <Link to={'/addNewTodo'}>Add New To do</Link>
            </div>
            <div className={'headerCounters'}>
                <p>All: {counter}</p>
                <p>Done: {doneCounter}</p>
                <p>Wait: {counter-doneCounter}</p>
            </div>
        </header>
    )
}
const AddNewTodo = () => {
    const {addTodo, incCounter} = useContext(TodosContext)
    const [inputValue,setInputValue] = useState({
        title: '',
        description: '',
    })

    const inputsOnChange = (e) => {
        const {name,value} = e.target;
        setInputValue({...inputValue, [name]: value})
    }

    const onSubmit =()=>{
        addTodo(inputValue);
        incCounter();


        setInputValue({
            title: '',
            description: '',
        });
    }
    return(
        <div className={'inputs'}>
            <input value={inputValue.title} onChange={inputsOnChange} type={'text'} name={'title'} placeholder={'add title'}/>
            <input value={inputValue.description} onChange={inputsOnChange} type={'text'} name={'description'} placeholder={'add description'}/>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

const AllTodoList = () => {
    const {todos,setTodos,decCounter} = useContext(TodosContext)
    console.log(todos)

    const deleteTodo = (el) =>{
        const newArray = todos.filter(value => value.description !== el.description && value.title!==el.title);
        setTodos(newArray);
        decCounter();
    }

    const markAsDone = () => {

    }
    return(
        <div>
            {todos.map(el =>
                <div key={el.title+el.description}>
                    <h3>{el.title}</h3>
                    <p>{el.description}</p>
                    <button onClick={markAsDone}>Done</button>
                    <button onClick={() => {deleteTodo(el)}}>Delete</button>
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
