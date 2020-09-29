import { CHOSE_DATE, CLOSE_MODAL_WINDOW } from './actions.js'

export const reducer = (state = {
    month: '',
    day: '',
    isModalWindowOpen: false
}, action) => {
    switch(action.type){
        case CHOSE_DATE:
            return {...state, isModalWindowOpen: true, month: action.payload, day: action.payload}
        case CLOSE_MODAL_WINDOW:
            return {...state, isModalWindowOpen: false, month: "", day: ""}
        default:
            return state
    }
}