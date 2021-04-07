import React, {useState, useEffect} from 'react'
import {
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useHistory,
} from "react-router-dom";

function Universal(props) {
    const [data, setData] = useState([]);
    const {url, location} = props;
    const fetchFromURL= async ()=>{
        const response = await  fetch(`${url}/${location}/`);
        const json = await response.json();
        setData(json);
    }

    useEffect(()=>{
            fetchFromURL()
        },[location]
    )

    return (
        <>
            <Switch>
                <Route path={`/${location}/:id`}>
                    <Detail data={data} location={location}/>
                </Route>
                <Route>
                    <Redirect to={`/${location}/`}/>
                </Route>
            </Switch>
            {data && data.map(el => (<div key={el.id}>
                <Link to={`/${location}/${el.id}`}>
                    {location==='posts' && <PostsPrint el={el}/>}
                    {location==='comments' && <CommentsPrint el={el}/>}
                    {location==='albums' && <AlbumsPrint el={el}/>}
                    {location==='photos' && <PhotosPrint el={el}/>}
                    {location==='todos' && <TodosPrint el={el}/>}
                    {location==='users' && <UsersPrint el={el}/>}

                </Link>
            </div>))}
        </>
    )
}

function Detail(props){
    const {data , location} =props;
    const {id} = useParams();
    const details = data[id];
    const history = useHistory();
    return(
        <div>
            {location==='posts' && <PostDetails details={details}/>}
            {location==='comments' && <CommentsDetails details={details}/>}
            {location==='albums' && <AlbumsDetails details={details}/>}
            {location==='photos' && <PhotosDetails details={details}/>}
            {location==='todos' && <TodosDetails details={details}/>}
            {location==='users' && <UserDetails details={details}/>}

            {id>1 && <button onClick={() => history.push(`/${location}/${+id -1}`)}>Previus Post</button>}
            {id<data.length && <button onClick={() => history.push(`/${location}/${+id +1}`)}>Next Post</button>}
            <hr/>
        </div>
    )
}

function PostsPrint({el}){
    console.log("posts sd")
    return(
        <div>
            <h4>{el.title}  - {el.id}</h4>
        </div>
    )
}

function CommentsPrint({el}){
    console.log('comments')
    console.log(el)
    return(
        <div>
            <h4>{el.name}  - {el.id}</h4>
        </div>
    )
}

function AlbumsPrint({el}){
    console.log("albums")
    return(
        <div>
            <h4>{el.title}  - {el.id}</h4>
        </div>
    )
}

function PhotosPrint({el}){
    console.log('photos')
    return(
        <div>
            <h4>{el.title}  - {el.id}</h4>
        </div>
    )
}

function TodosPrint({el}){
    console.log("todos")
    return(
        <div>
            <h4>{el.title}  - {el.id}</h4>
        </div>
    )
}

function UsersPrint({el}){
    console.log('Users')
    return(
        <div>
            <h4>{el.name}  - {el.id}</h4>
        </div>
    )
}



function PostDetails({details}){
    return(
        <div>
            <h3>{details.title}</h3>
            <p>{details.body}</p>
        </div>
    )
}

function CommentsDetails({details}){
    return(
        <div>
            <h3>{details.title}</h3>
            <p>{details.body}</p>
        </div>
    )
}
function AlbumsDetails({details}){
    return(
        <div>
            <h3>{details.title}</h3>
        </div>
    )
}


function PhotosDetails({details}){
    return(
        <div>
            <h3>{details.title}</h3>
            <img src={details.url}/>
        </div>
    )
}

function TodosDetails({details}){
    return(
        <div>
            <h3>{details.title} - {details.completed.toString()}</h3>
        </div>
    )
}

function UserDetails({details}){
    return(
        <div>
            <h3>{details.name}</h3>
            <p>Username - {details.username}</p>
            <p>Email - {details.email}</p>
            <p>Phone - {details.phone}</p>
        </div>
    )
}



export default Universal;

