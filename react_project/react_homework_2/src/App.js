
import './App.css';
import React, {Component} from 'react';
import Component1 from "./components/component1";
import {useState} from 'react'

const Header = ({value}) => {

  return(
    <div>
            <p>Header {value}</p>

    </div>
  )
}

function App() {

  const [count, setCount] = useState(0);
  const [isHeaderVisible, setisHeaderVisible] = useState(true);
  console.log(count);

  const butnOnClic = () =>{
    setCount(count+1);
  }
  const funcHeaderVisible=() =>{
    setisHeaderVisible(!isHeaderVisible);
  }
  return (
    <div>
        {isHeaderVisible && <Header value={count}/>}
      <button onClick={butnOnClic}>Add 1</button>
        <button onClick={funcHeaderVisible}>Header visible</button>
    </div>
  );
}

export default App;
