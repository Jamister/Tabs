import React from 'react';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

// Components
import ExportTab from '../ExportTab';

const NavigationBar = () => (
	<div className="grid-container full">
		<div className="grid-x">
			<div className="medium-12 cell">
				<div styleName="top-bar">
					<ExportTab />
				</div>
			</div>
		</div>
	</div>
);

export default CSSModules(NavigationBar, styles, { allowMultiple: true });
