export const CHOSE_DATE = 'CHOSE_DATE'
export const CLOSE_MODAL_WINDOW = 'CLOSE_MODAL_WINDOW'

export const choseDate = date => ( { type: CHOSE_DATE, payload: date } )
export const closeModalWindow = () => ( { type: CLOSE_MODAL_WINDOW } )