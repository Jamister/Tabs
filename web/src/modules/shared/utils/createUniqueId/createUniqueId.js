import { v5 as uuidv5 } from 'uuid';

export const createUniqueId = (hash) => {
    const uuid = uuidv5(hash, process.env.REACT_APP_NAMESPACE);
    const smaller_id = uuid.split('-')[0];
    return { uuid, smaller_id };
};
