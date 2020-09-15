import React from 'react';
import * as s from './ActionsSubBar.style';

// Components
import Container from 'modules/shared/components/Container';
import SwitchWritingType from '../SwitchWritingType';
import TuningButton from '../TuningButton';

const ActionsSubBar = () => (
    <s.SubBarWrapper>
        <Container>
            <SwitchWritingType />
            <s.SubBarDivision />
            <TuningButton />
            <s.SubBarDivision />
        </Container>
    </s.SubBarWrapper>
);

export default ActionsSubBar;
