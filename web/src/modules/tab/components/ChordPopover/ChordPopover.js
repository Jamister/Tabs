import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';

// Components
import KeyboardButton from '../KeyboardButton';

// Utils
import isVirtualKeyboardActive from 'modules/user/utils/isVirtualKeyboardActive';

function ChordPopover({ children }) {
    const chordsNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

    const content = (
        <div data-note="true">
            {chordsNotes.map(char => (
                <KeyboardButton key={char} char={char} />
            ))}
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

ChordPopover.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default ChordPopover;
