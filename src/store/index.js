import { composeWithDevTools } from "@redux-devtools/extension/lib/cjs"
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { cashReducer } from "./cashReducer"
import { customerReducer } from "./customerReducer"
import createSagaMiddleware from "redux-saga"
import { rootWatcher } from "../saga"

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
)

sagaMiddleware.run(rootWatcher)
