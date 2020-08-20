import { all, fork } from 'redux-saga/effects';

import tabSaga from 'modules/tab/store/sagas';

export default function* rootSaga() {
    yield all([
        fork(tabSaga),
    ]);
}
