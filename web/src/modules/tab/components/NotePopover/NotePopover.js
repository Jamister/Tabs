import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';

// Components
import KeyboardButton from '../KeyboardButton';

// Utils
import isVirtualKeyboardActive from 'modules/user/utils/isVirtualKeyboardActive';
import { numbers, letters, specialChars } from 'modules/tab/utils/validChars';

const NotePopover = ({ children }) => {
    const additionalChars = ['Backspace'];

    const content = (
        <div data-note="true">
            <div>
                {numbers.map(char => (
                    <KeyboardButton key={char} char={char} />
                ))}
            </div>
            <div>
                {[...letters, ...specialChars].map(char => (
                    <KeyboardButton key={char} char={char} />
                ))}
            </div>
            <div>
                {additionalChars.map(char => (
                    <KeyboardButton key={char} char={char} width="auto" />
                ))}
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
};

NotePopover.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default NotePopover;
