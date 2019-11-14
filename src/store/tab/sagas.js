// import { takeLatest, put } from 'redux-saga/effects';
// import {
// 	TEST_REQUESTED,
// 	TEST_RECEIVED,
// 	TEST_REQUEST_FAILED,
// } from './types';

// // Services
// import { get } from '../../services/get';

// export function* fetchCotacoes() {
// 	try {
// 		const url = '/compras/20';
// 		const payload = yield get(url);
// 		yield put({ type: TEST_RECEIVED, payload });
// 	} catch (error) {
// 		yield put({ type: TEST_REQUEST_FAILED, error });
// 	}
// }

// // saga
// export default function* cotacoesSaga() {
// 	yield takeLatest([TEST_REQUESTED], fetchCotacoes);
// }
