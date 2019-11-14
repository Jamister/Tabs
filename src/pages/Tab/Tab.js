import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

// Actions
import { moveSelectedNote, updateNote } from '../../store/tab/actions';

// Components
import Part from '../../components/Part';

const Tab = () => {
	const dispatch = useDispatch();
	const parts = useSelector(store => store.tab.parts, shallowEqual);

	function handleKeyDown(e) {
		const arrows = e.keyCode >= 37 && e.keyCode <= 40;
		if (arrows) {
			dispatch(moveSelectedNote(e.keyCode));
			return;
		}
		dispatch(updateNote(e.keyCode));
	}

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [handleKeyDown]);

	return (
		<div className="grid-container">
			<div className="grid-x">
				<div className="medium-12 cell">
					<h3>Create tab</h3>
				</div>
			</div>
			<div className="grid-x">
				<div className="medium-12 cell" data-test="tab-render">
					{parts.all_ids.map(p => (
						<p key={p} data-test="tab-render2">
							<Part
								key={p}
								part={parts.by_id[p]}
							/>
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default CSSModules(Tab, styles, { allowMultiple: true });
