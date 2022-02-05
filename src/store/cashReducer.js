const defaultState = {
  cash: 0,
}

const ADD_CASH = "ADD_CASH"
const GET_CASH = "GET_CASH"

export const ASYNC_ADD_CASH = "ASYNC_ADD_CASH"
export const ASYNC_GET_CASH = "ASYNC_GET_CASH"

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CASH:
      return { ...state, cash: state.cash + action.payload }
    case GET_CASH:
      return { ...state, cash: state.cash - action.payload }
    default:
      return state
  }
}
export const addCash = (cash) => ({ type: ADD_CASH, payload: cash })
export const getCash = (cash) => ({ type: GET_CASH, payload: cash })

export const AsyncAddCash = (cash) => ({ type: ASYNC_ADD_CASH, payload: cash })
export const AsyncGetCash = (cash) => ({ type: ASYNC_GET_CASH, payload: cash })
