import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import * as s from './Tab.style';

// Components
import Parts from 'modules/tab/components/Parts';
import AddPartButton from 'modules/tab/components/_buttons/AddPartButton';

// utils
import mapKeysToActions from 'modules/tab/utils/mapKeysToActions';

const TabView = () => {
    const dispatch = useDispatch();
    const parts = useSelector(store => store.tab.parts, shallowEqual);
    const all_ids = parts.all_ids || [];
    const by_id = parts.by_id || {};

    function handleKeyDown(event) {
        const action = mapKeysToActions(event, event.key);
        dispatch(action);
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <>
            <s.PaddingWrapper>
                {all_ids.map(part_id => (
                    <Parts
                        key={part_id}
                        part_id={part_id}
                        part={by_id[part_id]}
                    />
                ))}
            </s.PaddingWrapper>
            <div><AddPartButton /></div>
        </>
    );
};

export default TabView;
