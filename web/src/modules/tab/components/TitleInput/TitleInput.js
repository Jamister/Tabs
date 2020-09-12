import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import * as s from './TitleInput.style';

// Actions
import { updateTitle } from 'modules/tab/store/actions';

const TitleInput = () => {
    const dispatch = useDispatch();
    const title = useSelector(store => store.tab.title, shallowEqual);
    const [value, setValue] = useState(() => title);

    useEffect(() => {
        setValue(title);
    }, [title]);

    function handleEdition(e) {
        const new_value = e.target.value || '';
        setValue(new_value);
        dispatch(updateTitle({ title: new_value }));
    }

    return (
        <s.Input
            type="text"
            value={value}
            onChange={handleEdition}
            placeholder="Title"
        />
    );
};

export default TitleInput;
