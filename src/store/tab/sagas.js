import { takeEvery, put } from 'redux-saga/effects';
import * as types from './types';

export function* handleUpdateNote({ key_code }) {
	yield put({ type: types.REMOVE_EMPTY_COLUMN, key_code });
	yield put({ type: types.UPDATE_NOTE, key_code });
	yield put({ type: types.ADD_COLUMN, key_code });
}

export default function* tabSaga() {
	yield takeEvery([
		types.START_UPDATING_NOTE,
	], handleUpdateNote);
}
