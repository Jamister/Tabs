import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Radio } from 'antd';
import * as s from './SwitchWritingType.style';

// Actions
import * as actions from '../../store/actions';

const SwitchWritingType = () => {
    const dispatch = useDispatch();
    const user_is_writing = useSelector(store => store
        .tab.user_is_writing, shallowEqual);

    function switchWriting(e) {
        const writing = e?.target?.value || 'notes';
        dispatch(actions.userChangedWritingType(writing));
    }

    return (
        <s.SwitchWritingType>
            <Radio.Group
                buttonStyle="solid"
                defaultValue={user_is_writing}
                onChange={switchWriting}
            >
                <Radio.Button value="notes">Notas</Radio.Button>
                <Radio.Button value="chords">Acordes</Radio.Button>
            </Radio.Group>
        </s.SwitchWritingType>
    );
};

export default SwitchWritingType;
