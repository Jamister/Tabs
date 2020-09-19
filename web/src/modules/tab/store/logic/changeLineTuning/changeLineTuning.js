/* eslint-disable no-param-reassign */
import produce from 'immer';
import { getDateNow } from 'modules/shared/utils/dates';
import tabDefaultValues from 'modules/tab/utils/tabDefaultValues';

const changeLineTuning = produce((draft, action) => {
    const note = action?.note;
    const linePositionOnArray = Number(action?.line) - 1;

    function finish() {
        return draft;
    }

    function setLastChange() {
        draft.lastChange = getDateNow();
        return finish();
    }

    function updateNote() {
        draft.tuning[linePositionOnArray] = note;
        return setLastChange();
    }

    function createTuningWithNewNote() {
        draft.tuning = tabDefaultValues.tuning;
        return updateNote();
    }

    function checkTuningPreviousValue() {
        const tuning = [...draft.tuning];
        const hasNote = tuning[linePositionOnArray] !== undefined;
        return hasNote
            ? updateNote()
            : createTuningWithNewNote();
    }

    checkTuningPreviousValue();
});

export default changeLineTuning;
