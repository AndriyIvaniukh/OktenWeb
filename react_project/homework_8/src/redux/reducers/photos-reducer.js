import {ADD_PHOTOS,ADD_TO_BLACK_LIST, REMOVE_FROM_BLACK_LIST} from '../action-types'

const initialState = {
    photos: [],
    blacklist: [],
}

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case ADD_PHOTOS:{
            return{...state, photos: action.payload}
        }
        case ADD_TO_BLACK_LIST:{
            return {...state, blacklist: [...state.blacklist, action.payload]}
        }
        case REMOVE_FROM_BLACK_LIST:{
            return {...state, blacklist: state.blacklist.filter(el => el!==action.payload)}
        }
        default:
            return state;
    }
}

export default reducer;