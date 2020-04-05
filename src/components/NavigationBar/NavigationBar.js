import React from 'react';

// CSS
// import { Row, Col } from 'antd';
import * as s from './NavigationBar.style';

// Components
import Container from '../Container';
import ExportTab from '../ExportTab';

const NavigationBar = () => (
	<s.TabBarWrapper>
		<Container>
			<ExportTab />
		</Container>
	</s.TabBarWrapper>
);

export default NavigationBar;
