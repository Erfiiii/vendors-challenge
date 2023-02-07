import { call, put, takeLatest } from "redux-saga/effects";
import { getVendors } from "../api/vendors";
import { Vendor } from "../api/vendors/types";
import { getVendorsFailure, getVendorsFetch, getVendorsSuccess } from "../pages/vendors/vendorsSlice";



export function* fetchVendorsSaga(action: {
    type: typeof getVendorsFetch.type,
    payload: number
}) {
  try {
    let result: Vendor[] = yield call(getVendors,action.payload);
    yield put(getVendorsSuccess(result));
  } catch (e) {
    yield put(getVendorsFailure(e));
  }
}

export default function* rootSaga() {
  yield takeLatest(getVendorsFetch.type, fetchVendorsSaga);
}