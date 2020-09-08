import { v5 as uuidv5 } from 'uuid';

const createUniqueId = (hash) => {
    const hash_with_date = `${hash}-${Date.now()}`;
    const uuid = uuidv5(hash_with_date, process.env.REACT_APP_NAMESPACE);
    const smaller_id = uuid.split('-')[0];
    return { uuid, smaller_id };
};

export default createUniqueId;
