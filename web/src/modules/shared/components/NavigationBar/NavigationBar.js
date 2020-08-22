import React from 'react';
import * as s from './NavigationBar.style';

// Components
import CreateTabButton from 'modules/tab/components/CreateTabButton';
import Container from '../Container';

const NavigationBar = () => (
    <s.TabBarWrapper>
        <Container background="#253140">
            <s.Logo>Oak</s.Logo>
            <s.Menu>Tablaturas</s.Menu>
            <s.Button>
                <CreateTabButton />
            </s.Button>
            <s.AccountMenu>
                Beto
            </s.AccountMenu>
        </Container>
    </s.TabBarWrapper>
);

export default NavigationBar;
