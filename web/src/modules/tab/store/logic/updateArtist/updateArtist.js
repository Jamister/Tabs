/* eslint-disable no-param-reassign */
import produce from 'immer';
import { getDateNow } from 'modules/shared/utils/dates';

const updateArtist = produce((draft, action) => {
    function finish() {
        return draft;
    }

    function setLastChange() {
        draft.lastChange = getDateNow();
        return finish();
    }

    function setArtist() {
        const newArtist = action?.artist || '';
        draft.artist = newArtist;
        return setLastChange();
    }

    return setArtist();
});

export default updateArtist;
