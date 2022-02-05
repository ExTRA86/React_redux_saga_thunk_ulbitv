import { call, put, takeEvery } from "redux-saga/effects"
import {
  addManyCustomersAction,
  FETCH_CUSTOMERS,
} from "../store/customerReducer"

const fetchCustomerFromApi = () =>
  fetch("https://jsonplaceholder.typicode.com/users?_limit=5")

function* fetchCustomerWorker() {
  const data = yield call(fetchCustomerFromApi)
  const json = yield call(() => new Promise((res) => res(data.json())))
  yield put(addManyCustomersAction(json))
}

export function* customerWatcher() {
  yield takeEvery(FETCH_CUSTOMERS, fetchCustomerWorker)
}
