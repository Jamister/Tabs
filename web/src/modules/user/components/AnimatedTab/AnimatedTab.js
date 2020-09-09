import React, { useState, useEffect } from 'react';
import * as s from './AnimatedTab.style';

import movements from './movements';

const AnimatedTab = () => {
    const [notes, setNotes] = useState([]);
    const [location, setLocation] = useState({ n: 0, x: -40, y: -40 });

    useEffect(() => {
        function moveNote() {
            const move = movements[location.n];

            if (move === undefined) {
                setLocation({ n: 0, x: -40, y: -40 });
                setNotes([]);
                return;
            }

            if (move.type === 'note') {
                setNotes([...notes, move]);
            }

            setLocation({
                n: location.n + 1,
                x: move.x,
                y: move.y,
                value: move.value,
            });
        }

        const interval = setInterval(() => moveNote(), 250);

        return () => clearInterval(interval);
    }, [location, notes]);

    return (
        <s.AnimatedTabWrapper>
            <s.AnimatedNote x={location.x} y={location.y}>
                {location.value && (
                    <span>{location.value}</span>
                )}
            </s.AnimatedNote>
            {notes.map(note => (
                <s.FixedNote key={note.x} x={note.x} y={note.y}>
                    <span>{note.value}</span>
                </s.FixedNote>
            ))}
        </s.AnimatedTabWrapper>
    );
};

export default AnimatedTab;
