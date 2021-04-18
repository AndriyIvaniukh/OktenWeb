import {ADD_PHOTOS, ADD_TO_BLACK_LIST, REMOVE_FROM_BLACK_LIST} from "../action-types";

const addPhotos = (payload) => ({type: ADD_PHOTOS, payload})
const addToBlackList = (payload) => ({type: ADD_TO_BLACK_LIST, payload})
const removeFromBlackList = (payload) => ({type: REMOVE_FROM_BLACK_LIST, payload})


export {
    addPhotos,
    addToBlackList,
    removeFromBlackList,

}