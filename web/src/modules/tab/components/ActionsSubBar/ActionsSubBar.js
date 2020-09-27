import React from 'react';
import * as s from './ActionsSubBar.style';

// Components
import Container from 'modules/shared/components/Container';
import SwitchWritingType from '../SwitchWritingType';
import TuningButton from '../TuningButton';
import VirtualKeyboardSwitch from '../VirtualKeyboardSwitch';

const ActionsSubBar = () => (
    <s.SubBarWrapper>
        <Container>
            <SwitchWritingType />
            <s.SubBarDivision />
            <TuningButton />
            <s.SubBarDivision />
            <VirtualKeyboardSwitch />
            <s.SubBarDivision />
        </Container>
    </s.SubBarWrapper>
);

export default ActionsSubBar;
