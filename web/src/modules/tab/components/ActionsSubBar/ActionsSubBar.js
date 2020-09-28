import React, { useState, useEffect } from 'react';
import * as s from './ActionsSubBar.style';

// Components
import Container from 'modules/shared/components/Container';
import SwitchWritingType from '../SwitchWritingType';
import TuningButton from '../TuningButton';
import VirtualKeyboardSwitch from '../VirtualKeyboardSwitch';

const ActionsSubBar = () => {
    const [fixed, setFixed] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollPosition = window.scrollY;
            const fixedScroll = scrollPosition >= 61;
            setFixed(fixedScroll);
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <s.SubBarBackspace visible={fixed} />
            <s.SubBarWrapper fixed={fixed}>
                <Container>
                    <SwitchWritingType />
                    <s.SubBarDivision />
                    <TuningButton />
                    <s.SubBarDivision />
                    <VirtualKeyboardSwitch />
                    <s.SubBarDivision />
                </Container>
            </s.SubBarWrapper>
        </>
    );
};

export default ActionsSubBar;
