import {INC_TWO,DEC_TWO,INC_USER_VALUE_TWO,RESET_TWO,} from '../action-types'
const initialState = {
    counter: 0,
}

const reducer = (state = initialState ,action) =>{
    switch (action.type){
        case INC_TWO:
            return {...state, counter: state.counter +1}
        case DEC_TWO:
            return {...state, counter: state.counter -1 }
        case RESET_TWO:
            return {...state, counter: 0}
        case INC_USER_VALUE_TWO:
            return {...state, counter: state.counter + action.payload}
        default:
            return state;
    }
}

export default reducer;