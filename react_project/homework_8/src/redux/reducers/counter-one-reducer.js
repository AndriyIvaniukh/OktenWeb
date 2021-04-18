import {INC,DEC,INC_USER_VALUE,RESET,} from '../action-types'
const initialState = {
    counter: 0,
}

const reducer = (state = initialState ,action) =>{
    switch (action.type){
        case INC:
            return {...state, counter: state.counter +1}
        case DEC:
            return {...state, counter: state.counter -1 }
        case RESET:
            return {...state, counter: 0}
        case INC_USER_VALUE:
            return {...state, counter: state.counter + action.payload}
        default:
            return state;
    }
}

export default reducer;