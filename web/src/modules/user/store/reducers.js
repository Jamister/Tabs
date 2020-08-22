import tab from './store';

// Use cases
import addBlock from './logic/addBlock';

const funcs = {
    ADD_BLOCK: addBlock,
};

const reducer = (state = tab, action) => {
    const new_state = funcs[action.type] !== undefined
        ? funcs[action.type](state, action)
        : { ...state };
    return new_state;
};

export default reducer;
