import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import React, {useState, createContext, useContext} from 'react'

const TodosContext = createContext();

const ContextProvider = ({children}) => {
    const [todos,setTodos] = useState([]);
    const [doneTodosId,setDoneTodosId] = useState([]);

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
            markAsDone
        }}
        >
            {children}
        </TodosContext.Provider>
    )
}

const Header = () =>{
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
    const {todos,addTodo} = useContext(TodosContext)
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
        </div>
    )
}

const AllTodoList = () => {
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
