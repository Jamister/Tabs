import tab from './store';

// Use cases
import addBlock from './logic/addBlock';
import addColumn from './logic/addColumn';
import addPart from './logic/addPart';
import clearSelectedNote from './logic/clearSelectedNote';
import exportTabFormatTxt from './logic/exportTabFormatTxt';
import moveSelectedNote from './logic/moveSelectedNote';
import removeBlock from './logic/removeBlock';
import selectNote from './logic/selectNote';
import removeEmptyColumn from './logic/removeEmptyColumn';
import updateNote from './logic/updateNote';
import changedWritingType from './logic/changedWritingType';
import updateTitle from './logic/updateTitle';
import updateArtist from './logic/updateArtist';
import loadTabIntoStore from './logic/loadTabIntoStore';
import saveTab from './logic/saveTab';
import saveTabSuccess from './logic/saveTabSuccess';
import saveTabFailed from './logic/saveTabFailed';
import changeLineTuning from './logic/changeLineTuning';
import clearTabValues from './logic/clearTabValues';

const funcs = {
    ADD_BLOCK: addBlock,
    ADD_COLUMN: addColumn,
    ADD_PART: addPart,
    CLEAR_SELECTED_NOTE: clearSelectedNote,
    EXPORT_TAB_TXT: exportTabFormatTxt,
    MOVE_SELECTED_NOTE: moveSelectedNote,
    REMOVE_BLOCK: removeBlock,
    SELECT_NOTE: selectNote,
    REMOVE_EMPTY_COLUMN: removeEmptyColumn,
    UPDATE_NOTE: updateNote,
    CHANGED_WRITING_TYPE: changedWritingType,
    UPDATE_TITLE: updateTitle,
    UPDATE_ARTIST: updateArtist,
    LOAD_TAB_INTO_STORE: loadTabIntoStore,
    SAVE_TAB: saveTab,
    SAVE_TAB_SUCCESS: saveTabSuccess,
    SAVE_TAB_FAILED: saveTabFailed,
    CHANGE_LINE_TUNING: changeLineTuning,
    CLEAR_TAB_VALUES: clearTabValues,
};

const reducer = (state = tab, action) => {
    const new_state = funcs[action.type] !== undefined
        ? funcs[action.type](state, action)
        : { ...state };
    return new_state;
};

export default reducer;
