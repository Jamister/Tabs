import React from 'react';

// CSS
import * as s from './Header.style';

// Components
import Container from '../Container';

function Header() {
	return (
		<Container>
			<s.HeaderWrapper>
				<h3>Create tab</h3>
			</s.HeaderWrapper>
		</Container>
	);
}

export default Header;
