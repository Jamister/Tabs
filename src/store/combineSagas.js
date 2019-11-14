import { all } from 'redux-saga/effects';

// import tabSaga from './tab/sagas';

export default function* rootSaga() {
	yield all([
		// fork(tabSaga),
	]);
}
