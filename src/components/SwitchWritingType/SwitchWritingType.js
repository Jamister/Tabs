import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

// Actions
import { userChangedWritingType } from '../../store/tab/actions';

const SwitchWritingType = () => {
	const dispatch = useDispatch();
	const user_is_writing = useSelector(store => store
		.tab.user_is_writing, shallowEqual);

	function switchToNotes() {
		const action = userChangedWritingType({ writing: 'notes' });
		dispatch(action);
	}

	function switchToChords() {
		const action = userChangedWritingType({ writing: 'chords' });
		dispatch(action);
	}

	const notes_is_active = user_is_writing === 'notes';
	const notes_class = notes_is_active
		? 'button'
		: 'button hollow';
	const chords_is_active = user_is_writing === 'chords';
	const chords_class = chords_is_active
		? 'button'
		: 'button hollow';

	return (
		<div className="button-group no-gaps">
			<button type="button" className={notes_class} onClick={switchToNotes}>
				Notes
			</button>
			<button type="button" className={chords_class} onClick={switchToChords}>
				Chords
			</button>
		</div>
	);
};

export default CSSModules(SwitchWritingType, styles, { allowMultiple: true });
