import {DEC, INC, INC_USER_VALUE, RESET} from "../action-types";

const incAction = () => ({type: INC});
const decAction = () => ({type: DEC});
const resetAction = () => ({type: RESET});
const incUserValueAction = (payload) => ({type: INC_USER_VALUE, payload});

export {
    incAction,
    decAction,
    resetAction,
    incUserValueAction,
}
