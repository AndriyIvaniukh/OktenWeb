import {combineReducers} from "redux";
import counterOneReducer from './counter-one-reducer';
import counterTwoReducer from './counter-two-reducer'

const reducer = combineReducers({
    counter1: counterOneReducer,
    counter2: counterTwoReducer,
})
export default reducer;