import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

// Components
import NavigationBar from '../../components/NavigationBar';
import Header from '../../components/Header';
import Part from '../../components/Part';

// Functions
import { mapKeysToActions } from '../../functions/mapKeysToActions';

const Tab = () => {
	const dispatch = useDispatch();
	const parts = useSelector(store => store.tab.parts, shallowEqual);
	const all_ids = parts.all_ids || [];


	const printed_tab = useSelector(store => store.tab.printed_tab, shallowEqual);


	function handleKeyDown(e) {
		const action = mapKeysToActions(e.keyCode);
		dispatch(action);
	}

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [handleKeyDown]);

	return (
		<>
			<NavigationBar />
			<div className="grid-container">
				<Header />
				<div className="grid-x">
					<div className="medium-12 cell" data-test="tab-render">
						{all_ids.map(p => (
							<Part
								key={p}
								data-test="parts-render"
								part={parts.by_id[p]}
							/>
						))}
					</div>
				</div>

				<div className="grid-x">
					<div className="medium-12 cell" style={{ whiteSpace: 'pre', fontFamily: 'Courier' }}>
						{printed_tab}
					</div>
				</div>
			</div>
		</>
	);
};

export default CSSModules(Tab, styles, { allowMultiple: true });
