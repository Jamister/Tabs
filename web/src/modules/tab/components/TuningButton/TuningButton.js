import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Popover, Button } from 'antd';
import * as s from './TuningButton.style';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faCaretDown } from '@fortawesome/free-solid-svg-icons';

// Actions
import * as actions from 'modules/tab/store/actions';

const TuningButton = () => {
    const dispatch = useDispatch();
    const lines = useSelector(store => store.tab.lines);
    const tuning = useSelector(store => store.tab.tuning);

    function changeLine(e) {
        const note = e?.target?.value;
        const line = e?.target?.name;
        dispatch(actions.changeLineTuning({ line, note }));
    }

    const content = (
        <s.TuningPopoverWrapper>
            {lines.map((line) => (
                <s.TuningRow key={line}>
                    <s.LineNumber>{line}ª linha</s.LineNumber>
                    <Input
                        type="text"
                        id={line}
                        name={line}
                        defaultValue={tuning[line - 1]}
                        onChange={changeLine}
                        maxLength="2"
                    />
                </s.TuningRow>
            ))}
        </s.TuningPopoverWrapper>
    );

    return (
        <s.TuningWrapper>
            <FontAwesomeIcon icon={faAlignLeft} />
            <span>Tuning:</span>
            <Popover placement="bottomLeft" content={content} trigger="click">
                <Button type="primary">
                    {tuning.join(' ')}
                    <FontAwesomeIcon icon={faCaretDown} />
                </Button>
            </Popover>
        </s.TuningWrapper>
    );
};

export default TuningButton;
