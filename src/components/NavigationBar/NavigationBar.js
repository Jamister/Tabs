import React from 'react';
import { useDispatch } from 'react-redux';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

// Actions
import { exportTabFormatTxt } from '../../store/tab/actions';

function NavigationBar() {
	const dispatch = useDispatch();

	function exportTab() {
		dispatch(
			exportTabFormatTxt(),
		);
	}

	return (
		<div className="grid-container full">
			<div className="grid-x">
				<div className="medium-12 cell">
					<div styleName="top-bar">
						<button type="button" onClick={exportTab}>
							Export
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CSSModules(NavigationBar, styles, { allowMultiple: true });
