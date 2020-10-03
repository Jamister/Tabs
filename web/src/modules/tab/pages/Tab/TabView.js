import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import * as s from './Tab.style';

// Components
import Parts from 'modules/tab/components/Parts';
import AddPartButton from 'modules/tab/components/AddPartButton';

// Actions
import * as actions from 'modules/tab/store/actions';

// Utils
import mapKeysToActions from 'modules/tab/utils/mapKeysToActions';

const TabView = () => {
    const dispatch = useDispatch();
    const parts = useSelector(store => store.tab.parts, shallowEqual);
    const allIds = parts.allIds || [];
    const byId = parts.byId || {};

    useEffect(() => {
        function handleKeyDown(event) {
            const action = mapKeysToActions(event, event.key);
            dispatch(action);
        }

        function handleMouseUp(event) {
            const elementAttr = event.target.getAttribute('data-note');
            const isOutsideTabClick = elementAttr === null;
            if (isOutsideTabClick) dispatch(actions.clearSelectedNote());
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
                {allIds.map(part_id => (
                    <Parts
                        key={part_id}
                        part_id={part_id}
                        part={byId[part_id]}
                    />
                ))}
            </s.PaddingWrapper>
            <s.AddPartButtonWrapper>
                <AddPartButton />
            </s.AddPartButtonWrapper>
        </>
    );
};

export default TabView;
