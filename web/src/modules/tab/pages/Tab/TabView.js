import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import * as s from './Tab.style';

// Components
import Parts from 'modules/tab/components/Parts';
import AddPartButton from 'modules/tab/components/_buttons/AddPartButton';

// Actions
import * as actions from 'modules/tab/store/actions';

// Utils
import mapKeysToActions from 'modules/tab/utils/mapKeysToActions';

const TabView = () => {
    const dispatch = useDispatch();
    const parts = useSelector(store => store.tab.parts, shallowEqual);
    const all_ids = parts.all_ids || [];
    const by_id = parts.by_id || {};

    useEffect(() => {
        function handleKeyDown(event) {
            const action = mapKeysToActions(event, event.key);
            dispatch(action);
        }

        function handleMouseUp(event) {
            const elementAttr = event.target.getAttribute('data-note');
            const isOutsideTabClick = elementAttr === null;
            if (isOutsideTabClick) dispatch(actions.clearSelectNote());
        }

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

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
