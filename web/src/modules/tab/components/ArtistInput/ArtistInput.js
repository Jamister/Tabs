import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import * as s from './ArtistInput.style';

// Actions
import * as actions from 'modules/tab/store/actions';

const ArtistInput = () => {
    const dispatch = useDispatch();
    const artist = useSelector(store => store.tab.artist, shallowEqual);
    const [value, setValue] = useState(() => artist);

    useEffect(() => {
        setValue(artist);
    }, [artist]);

    function handleEdition(e) {
        const newArtist = e.target.value || '';
        setValue(newArtist);
        dispatch(actions.updateArtist({ artist: newArtist }));
    }

    return (
        <s.ArtistWrapper>
            <s.Label>Artista: </s.Label>
            <s.Input
                type="text"
                value={value}
                onChange={handleEdition}
                placeholder="Title"
            />
        </s.ArtistWrapper>
    );
};

export default ArtistInput;
