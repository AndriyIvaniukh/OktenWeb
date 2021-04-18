import {combineReducers} from "redux";
import counterOneReducer from './counter-one-reducer';
import counterTwoReducer from './counter-two-reducer';
import photosReducer from './photos-reducer';
import productsReducer from './products-reducer'

const index = combineReducers({
    counter1: counterOneReducer,
    counter2: counterTwoReducer,
    photos: photosReducer,
    products:  productsReducer,
})
export default index;