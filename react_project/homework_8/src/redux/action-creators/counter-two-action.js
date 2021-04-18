import {DEC_TWO, INC_TWO, INC_USER_VALUE_TWO,
    RESET_TWO} from "../action-types";

const incAction_TWO = () => ({type: INC_TWO});
const decAction_TWO = () => ({type: DEC_TWO});
const resetAction_TWO = () => ({type: RESET_TWO});
const incUserValueAction_TWO = (payload) => ({type: INC_USER_VALUE_TWO, payload});

export {
    incAction_TWO,
    decAction_TWO,
    resetAction_TWO,
    incUserValueAction_TWO,
}