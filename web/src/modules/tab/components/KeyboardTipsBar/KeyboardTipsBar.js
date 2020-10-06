import React from 'react';
import * as s from './KeyboardTipsBar.style';

// Components
import Container from 'modules/shared/components/Container';
import ArrowTopKey from './ArrowTopKey';
import ArrowDownKey from './ArrowDownKey';
import ArrowLeftKey from './ArrowLeftKey';
import ArrowRightKey from './ArrowRightKey';

// To navigate through the tab
const KeyboardTipsBar = () => (
    <s.TipsBarWrapper>
        <Container>
            <s.Subtitle first>
                Atalhos do teclado:
            </s.Subtitle>

            <ArrowTopKey />
            <ArrowDownKey />
            <ArrowLeftKey />
            <ArrowRightKey />
            <s.Subtitle>
                - Navegue pela tab
            </s.Subtitle>

            <s.Key plusKey>+</s.Key>
            <s.Key minusKey>-</s.Key>
            <s.Subtitle>
                - Adicione ou remova colunas
            </s.Subtitle>
        </Container>
    </s.TipsBarWrapper>
);

export default KeyboardTipsBar;
