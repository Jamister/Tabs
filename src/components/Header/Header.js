import React from 'react';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

function Header() {
	return (
		<div className="grid-x">
			<div className="medium-12 cell">
				<div styleName="header-wrapper">
					<h3>Create tab</h3>
				</div>
			</div>
		</div>
	);
}

export default CSSModules(Header, styles, { allowMultiple: true });
