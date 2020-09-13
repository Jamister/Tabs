import React from 'react';
import { useSelector } from 'react-redux';

// CSS
import * as s from './TuneOnPart.style';

const TuneOnPart = () => {
    const tuning = useSelector(store => store.tab.tuning) || [];

    return tuning.map((tuningNote, i) => {
        const key = `${tuningNote}${i}`;

        return (
            <s.TuneNote key={key}>
                {tuningNote}
            </s.TuneNote>
        );
    });
};

export default TuneOnPart;
