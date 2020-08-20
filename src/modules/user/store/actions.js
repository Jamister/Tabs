import * as types from './types';

export const addBlock = (part_id) => ({
    type: types.ADD_BLOCK,
    part_id,
});
