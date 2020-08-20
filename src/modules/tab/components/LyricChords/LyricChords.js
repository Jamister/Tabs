import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

/* eslint-disable */

// CSS
import * as s from './LyricChords.style';

// Actions
import { addChordToLyric } from '../../store/actions';

// Components
import Portal from 'modules/shared/components/Portal';
import OverlayToLocateChord from '../OverlayToLocateChord';

function LyricChords() {
    const dispatch = useDispatch();
    const [overlay_visibility, setOverlay] = useState(false);

    function openOverlayToAddChord() {
        setOverlay(true);
        // const action = addChordToLyric({
        // 	part_id: 1,
        // 	line_id: 1,
        // });
        // dispatch(action);
    }

    return (
        <>
            {overlay_visibility && (
                <Portal>
                    <OverlayToLocateChord />
                </Portal>
            )}
            <s.AddChordButton
                type="button"
                onClick={openOverlayToAddChord}
            >
                +
            </s.AddChordButton>
            <s.ChordLine id="chord-line-1">aa</s.ChordLine>
        </>
    );
}

LyricChords.propTypes = {
    lyric_line: PropTypes.shape({
        id: PropTypes.string.isRequired,
        lyric: PropTypes.string.isRequired,
    }).isRequired,
};

export default LyricChords;
