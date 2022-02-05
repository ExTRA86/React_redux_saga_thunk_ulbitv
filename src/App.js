import { useDispatch, useSelector } from "react-redux"
import { fetchCustomers } from "./asyncActions/customers"
import "./App.css"
import { AsyncAddCash, AsyncGetCash } from "./store/cashReducer"
import {
  addCustomerAction,
  fetchCustomersSaga,
  removeCustomerAction,
} from "./store/customerReducer"

function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state) => state.cash.cash)
  const customers = useSelector((state) => state.customers.customers)

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>

        <button onClick={() => dispatch(AsyncAddCash())}>
          Пополнить счет (saga)
        </button>
        <button onClick={() => dispatch(AsyncGetCash())}>
          Снять со счета (saga)
        </button>

        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>
          Добавить клиента из базы (thunk)
        </button>

        <button onClick={() => dispatch(fetchCustomersSaga())}>
          Добавить клиента из базы (saga)
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              onClick={() => removeCustomer(customer)}
              style={{ fontSize: "2rem", marginTop: 20 }}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "2rem", marginTop: 20 }}>
          Клиенты отсутствуют!
        </div>
      )}
    </div>
  )
}

export default App
