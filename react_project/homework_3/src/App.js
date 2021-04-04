import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import renderTodos from "./components/renderTodos";
import renderUsers from "./components/renderUsers";
import renderPhotos from "./components/renderPhotos";
import renderAlbums from "./components/renderAlbums";
import renderPosts from "./components/renderPosts";
import renderComments from "./components/renderComments";


//ендпоінти  /posts    /comments   /albums    /photos     /todos     /users
//
//
// потрібно створити логіку, яка задовільнить наступні вимоги
// в нас має бути 6 кнопок, які дозволяють нам переключатись між 'табами' (posts, comments, albums, photos, todos, users)
// дефолтно обрана таба- пости
// по кліку на кнопку ми повинні підтягнути відповідний список і зрендерити його через .map
// лише 1 список видимий одночасно
// потрібно створити 6 компонент, які займатимуться рендерінгом списків (отримуватимуть пропсами список)- PostList, CommentsList...

const url ='https://jsonplaceholder.typicode.com/';


function App() {
    let [endUrl, setEndUrl] = useState('posts');
    let [values, setValues] = useState([]);

    const fetchData = async() =>{
        const responce = await fetch(`${url}${endUrl}`);
        const data = await responce.json();
        console.log(data)
        setValues(data);
    }

    useEffect(() => {
        fetchData();
    },[endUrl])

    const clickPosts =()=>{
        setEndUrl('posts');
    }
    const clickComments =()=>{
        setEndUrl('comments');
        console.log('click button comments')
    }
    const clickAlbums =()=>{
        setEndUrl('albums');
    }
    const clickTodos =()=>{
        console.log('todos')
        setEndUrl('todos');
    }
    const clickUser =()=>{
        setEndUrl('users');
    }
    const clickPhotos =()=>{
        setEndUrl('photos');
    }

  return (
    <div className={'main'}>
        <div className={'buttons'}>
            <button onClick={clickPosts}>Posts</button>
            <button onClick={clickComments}>Comments</button>
            <button onClick={clickAlbums}>Albums</button>
            <button onClick={clickPhotos}>Photos</button>
            <button onClick={clickTodos}>Todos</button>
            <button onClick={clickUser}>Users</button>
        </div>
        <div className={'form'}>
            <div className={'cards'}>
                {endUrl==='posts' && values.map(value => renderPosts(value))}
                {endUrl==='comments' && values.map(value => renderComments(value))}
                {endUrl==='albums' && values.map(value => renderAlbums(value))}
                {endUrl==='photos' && values.filter(el=>el.id<300).map(value => renderPhotos(value))}
                {endUrl==='todos' && values.map(value => renderTodos(value))}
                {endUrl==='users' && values.map(value => renderUsers(value))}
            </div>
        </div>
    </div>
  );
}


export default App;

