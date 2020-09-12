import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import * as actions from 'modules/tab/store/actions';

// Api
import { SAVE_TAB } from 'modules/tab/api';

// Utils
import { getDateDiffFromNow } from 'modules/shared/utils/dates';

const SavingEditions = () => {
    const dispatch = useDispatch();
    const [saveTab] = useMutation(SAVE_TAB);
    const lastChange = useSelector(state => state.tab.lastChange);
    const isSaving = useSelector(state => state.tab.isSaving);

    useEffect(() => {
        const save = () => {
            dispatch(actions.saveTab({ mutation: saveTab }));
        };

        const checkPreviousOtsStillSaving = () => {
            if (!isSaving) save();
        };

        const checkIfUserStopEditing = () => {
            const lastChangeFromNow = getDateDiffFromNow(lastChange, 'seconds');
            const noChangesInLast5Seconds = lastChangeFromNow < -5;
            if (noChangesInLast5Seconds) checkPreviousOtsStillSaving();
        };

        const checkIfHadEdition = () => {
            const tabHasEdition = lastChange !== 0;
            if (tabHasEdition) checkIfUserStopEditing();
        };

        const interval = setInterval(() => checkIfHadEdition(), 2000);

        return () => clearInterval(interval);
    }, [lastChange, isSaving]);

    return null;
};

export default SavingEditions;
