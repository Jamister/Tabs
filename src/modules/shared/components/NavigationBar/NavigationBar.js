import React from 'react';

// Components
import ExportTab from 'modules/tab/components/ExportTab';
import Container from '../Container';

// Css
// import { Row, Col } from 'antd';
import * as s from './NavigationBar.style';

const NavigationBar = () => (
    <s.TabBarWrapper>
        <Container>
            <s.Logo>Oaktabs</s.Logo>
            <s.Buttons>
                <ExportTab />
            </s.Buttons>
        </Container>
    </s.TabBarWrapper>
);

export default NavigationBar;
