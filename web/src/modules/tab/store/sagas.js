import { takeEvery, put } from 'redux-saga/effects';
import * as types from './types';

export function* handleUpdateNote({ key }) {
    yield put({ type: types.REMOVE_EMPTY_COLUMN, key });
    yield put({ type: types.UPDATE_NOTE, key });
    yield put({ type: types.ADD_COLUMN });
}

export default function* tabSaga() {
    yield takeEvery([types.START_UPDATING_NOTE], handleUpdateNote);
}
