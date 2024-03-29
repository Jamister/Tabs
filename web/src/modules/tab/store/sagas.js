import { takeEvery, takeLatest, put, select, call } from 'redux-saga/effects';
import * as types from './types';
import { hasAnyNoteSelectedSelector } from 'modules/tab/store/selectors';

function* handleUpdateNote({ key }) {
    const hasNoteSelected = yield select(hasAnyNoteSelectedSelector);
    if (hasNoteSelected) {
        yield put({ type: types.UPDATE_NOTE, key });
        yield put({ type: types.ADD_COLUMN, auto: true });
    }
}

function* handleSaveTab({ mutation }) {
    try {
        const fullTab = yield select(state => state.tab);
        const content = {
            parts: fullTab.parts,
            blocks: fullTab.blocks,
            columns: fullTab.columns,
            lines: fullTab.lines,
            notes: fullTab.notes,
        };
        const params = {
            hashId: fullTab.tabHashId,
            instrument: fullTab.instrument,
            title: fullTab.title,
            artist: fullTab.artist,
            tuning: fullTab.tuning.join(','),
            content: JSON.stringify(content),
            // private: false,
        };
        yield call(mutation, { variables: params });
        yield put({ type: types.SAVE_TAB_SUCCESS });
    } catch (error) {
        yield put({ type: types.SAVE_TAB_FAILED, error });
    }
}

export default function* tabSaga() {
    yield takeEvery([types.START_UPDATING_NOTE], handleUpdateNote);
    yield takeLatest([types.SAVE_TAB], handleSaveTab);
}
