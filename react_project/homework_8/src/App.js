import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {incAction, decAction, incUserValueAction, resetAction,
    decAction_TWO, incAction_TWO, incUserValueAction_TWO, resetAction_TWO} from "./redux/action-creators";
import Photos from "./components/photos";
import Products from "./components/products";


function App() {
  const {counter1, counter2} = useSelector(({counter1,counter2}) =>({
          counter1: counter1.counter,
          counter2: counter2.counter,
      }))
  const dispatch = useDispatch();
  const userValue = 102;
  return (
    <div>
      <h3>{counter1}  - Counter 1</h3>
      <button onClick={()=>dispatch(incAction())}>Inc</button>
      <button onClick={()=>dispatch(decAction())}>Dec</button>
      <button onClick={()=>dispatch(resetAction())}>Reset</button>
      <button onClick={()=>dispatch(incUserValueAction(25))}>Inc 102</button>
        <hr/>
      <h3>{counter2}  - Counter 2</h3>
      <button onClick={()=>dispatch(incAction_TWO())}>Inc</button>
      <button onClick={()=>dispatch(decAction_TWO())}>Dec</button>
      <button onClick={()=>dispatch(resetAction_TWO())}>Reset</button>
      <button onClick={()=>dispatch(incUserValueAction_TWO(35))}>Inc 102</button>

        <hr/>
        {!(counter1 %2) && <Photos/>}
        <Products />
    </div>
  );
}
export default App;
