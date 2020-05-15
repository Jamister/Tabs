import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import * as s from './TuneOnPart.style';

function TuneOnPart() {
	const tune = useSelector(store => store
		.tab.tune, shallowEqual) || [];

	return tune.map((tune_note, i) => {
		const key = `${tune_note}${i}`;

		return (
			<s.TuneNote key={key}>
				{tune_note}
			</s.TuneNote>
		);
	});
}

export default TuneOnPart;
