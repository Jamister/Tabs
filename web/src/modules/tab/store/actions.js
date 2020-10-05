import * as types from './types';

export const addBlock = (part_id) => ({
    type: types.ADD_BLOCK,
    part_id,
});

export const addColumn = () => ({
    type: types.ADD_COLUMN,
});

export const addPart = () => ({
    type: types.ADD_PART,
});

export const clearSelectedNote = () => ({
    type: types.CLEAR_SELECTED_NOTE,
});

export const exportTabFormatTxt = () => ({
    type: types.EXPORT_TAB_TXT,
});

export const moveSelectedNote = ({ event, key }) => ({
    type: types.MOVE_SELECTED_NOTE,
    event,
    key,
});

export const removeBlock = (part_id) => ({
    type: types.REMOVE_BLOCK,
    part_id,
});

export const selectNote = (note) => ({
    type: types.SELECT_NOTE,
    note,
});

export const startUpdatingNote = ({ key }) => ({
    type: types.START_UPDATING_NOTE,
    key,
});

export const userChangedWritingType = (writing) => ({
    type: types.CHANGED_WRITING_TYPE,
    writing,
});

export const addChordToLyric = ({ part_id, line_id }) => ({
    type: types.ADD_CHORD_TO_LYRIC,
    part_id,
    line_id,
});

export const updateTitle = ({ title }) => ({
    type: types.UPDATE_TITLE,
    title,
});

export const updateArtist = ({ artist }) => ({
    type: types.UPDATE_ARTIST,
    artist,
});

export const loadTabIntoStore = ({ payload }) => ({
    type: types.LOAD_TAB_INTO_STORE,
    payload,
});

export const saveTab = ({ mutation }) => ({
    type: types.SAVE_TAB,
    mutation,
});

export const changeLineTuning = ({ line, note }) => ({
    type: types.CHANGE_LINE_TUNING,
    line,
    note,
});

export const clearTabValues = () => ({
    type: types.CLEAR_TAB_VALUES,
});
