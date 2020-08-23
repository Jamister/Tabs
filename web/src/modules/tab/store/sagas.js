import { takeEvery, put, select } from 'redux-saga/effects';
import * as types from './types';

export function* handleUpdateNote({ key }) {
    const selected_note = yield select(state => state.tab.selected_note);
    const selected_note_id = Object
        .values(selected_note)
        .map(value => value)
        .join('-');
    const has_note_selected = selected_note_id !== '0-0-0-0';
    if (has_note_selected) {
        yield put({ type: types.REMOVE_EMPTY_COLUMN, key });
        yield put({ type: types.UPDATE_NOTE, key });
        yield put({ type: types.ADD_COLUMN });
    }
}

export default function* tabSaga() {
    yield takeEvery([types.START_UPDATING_NOTE], handleUpdateNote);
}
