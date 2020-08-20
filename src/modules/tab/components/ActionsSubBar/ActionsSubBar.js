import React from 'react';

// CSS
// import { Row, Col } from 'antd';
import * as s from './ActionsSubBar.style';

// Components
import Container from 'modules/shared/components/Container';
// import AddPartButton from '../_buttons/AddPartButton';
import SwitchWritingType from '../SwitchWritingType';

const ActionsSubBar = () => (
    <s.SubBarWrapper>
        <Container>
            <SwitchWritingType />
        </Container>
    </s.SubBarWrapper>
);

export default ActionsSubBar;
