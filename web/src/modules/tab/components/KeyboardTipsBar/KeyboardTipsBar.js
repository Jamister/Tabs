import React from 'react';
import * as s from './KeyboardTipsBar.style';

// Components
import Container from 'modules/shared/components/Container';
import ArrowTopKey from './ArrowTopKey';
import ArrowDownKey from './ArrowDownKey';
import ArrowLeftKey from './ArrowLeftKey';
import ArrowRightKey from './ArrowRightKey';

const KeyboardTipsBar = () => (
    <s.TipsBarWrapper>
        <Container>
            <ArrowTopKey />
            <ArrowDownKey />
            <ArrowLeftKey />
            <ArrowRightKey />
            <s.Subtitle>To navigate through the tab</s.Subtitle>
        </Container>
    </s.TipsBarWrapper>
);

export default KeyboardTipsBar;
