import { call, put,all,takeLatest} from "@redux-saga/core/effects";
import {  getApiSet } from "./Accions";
import { getAxios } from "./getAxios";
import { types } from "./RrduxTypes";

export function* handleGetAPi() {
  try {
    const res = yield call(getAxios);
    yield put(getApiSet(res.data));
   
  } catch (err) {
    console.log(err);
  }
}

export function* watchHandleGetAPi() {
  yield takeLatest(types.GET_API, handleGetAPi);
}

export function* rootSaga() {
  yield all([watchHandleGetAPi()]);
}
