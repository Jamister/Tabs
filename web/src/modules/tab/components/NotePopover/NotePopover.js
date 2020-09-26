import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Popover } from 'antd';
import * as s from './NotePopover.style';

// Actions
import * as actions from '../../store/actions';

// Utils
import isVirtualKeyboardActive from 'modules/user/utils/isVirtualKeyboardActive';
import { numbers, letters, specialChars } from 'modules/tab/utils/validChars';

function NotePopover({ children }) {
    const dispatch = useDispatch();
    const additionalChars = ['Backspace'];

    function handleChange(char) {
        dispatch(actions.startUpdatingNote({ key: char }));
    }

    const renderCharButton = (char, width = '30px') => (
        <s.KeyboardButton
            key={char}
            widthValue={width}
            type="button"
            data-note="true"
            onClick={() => handleChange(char)}
        >
            {char}
        </s.KeyboardButton>
    );

    const content = (
        <div data-note="true">
            <div>
                {numbers.map(char => renderCharButton(char))}
            </div>
            <div>
                {[...letters, ...specialChars].map(char => renderCharButton(char))}
            </div>
            <div>
                {additionalChars.map(char => renderCharButton(char, 'auto'))}
            </div>
        </div>
    );

    const childrenElems = React.Children.map(children, (child) => (
        <React.Fragment key={child}>
            {child}
        </React.Fragment>
    ));

    if (isVirtualKeyboardActive()) {
        return (
            <Popover
                content={content}
                trigger="click"
                visible
            >
                {childrenElems}
            </Popover>
        );
    }

    return <>{childrenElems}</>;
}

NotePopover.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default NotePopover;
