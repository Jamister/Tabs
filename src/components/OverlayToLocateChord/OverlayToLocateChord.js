/* eslint-disable */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// CSS
import * as s from './OverlayToLocateChord.style';

// Actions
import { addChordToLyric } from '../../store/tab/actions';

function OverlayToLocateChord() {
	const dispatch = useDispatch();
	const [mouse_position, setPosition] = useState([0, 0]);

	// function getChordLinePosition(elem_id) {
	// 	const elem = document.getElementById(elem_id);
	// 	if (elem) {
	// 		const offsets = elem.getBoundingClientRect();
	// 		const { top, left, width } = offsets;
	// 		// bottom: 476.5
	// 		// height: 22
	// 		// left: 404
	// 		// right: 1539
	// 		// top: 454.5
	// 		// width: 1135
	// 		// x: 404
	// 		// y: 454.5
	// 		return offsets;
	// 	}
	// }

	const limits = {
		left: 404,
		right: 404 + 1135,
		top: 454.5,
	};

	useEffect(() => {
		function handleMouseMove(e) {
			const middle = 404 + 1135 / 2;
			const check_left = e.pageX <= limits.left
				? limits.left
				: e.pageX;
			const x = check_left >= limits.right
				? limits.right
				: check_left;
			const y = limits.top - 68;
			setPosition([x, y]);
		}

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	function saveLocation() {
		const action = addChordToLyric({
			part_id: 1,
			line_id: 1,
		});
		dispatch(action);
	}

	return (
		<s.Overlay onClick={saveLocation}>
			<s.Cross
				x={mouse_position[0]}
				y={mouse_position[1]}
			/>
		</s.Overlay>
	);
}

OverlayToLocateChord.propTypes = {
	lyric_line: PropTypes.shape({
		id: PropTypes.string.isRequired,
		lyric: PropTypes.string.isRequired,
	}).isRequired,
};

export default OverlayToLocateChord;
