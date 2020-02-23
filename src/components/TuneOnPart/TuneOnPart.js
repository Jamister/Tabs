import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

// Components
// import Note from '../Note';

function TuneOnPart() {
	const tune = useSelector(store => store
		.tab.tune, shallowEqual) || [];

	return (
		<>
			{tune.map((tune_note, i) => {
				const key = `${tune_note}${i}`;

				return (
					<div key={key} styleName="tune-note">
						{tune_note}
					</div>
				);
			})}
		</>
	);
}

export default CSSModules(TuneOnPart, styles, { allowMultiple: true });
