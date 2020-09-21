import React from 'react';
import * as s from './TabHeaderInfo.style';

// Components
import TabSavedMessage from 'modules/tab/components/TabSavedMessage';
import TitleInput from 'modules/tab/components/TitleInput';
import ArtistInput from 'modules/tab/components/ArtistInput';
import TabEditionMenu from 'modules/tab/components/TabEditionMenu';

const TabHeaderInfo = () => (
    <s.TabHeader>
        <TabSavedMessage />
        <TitleInput />
        <ArtistInput />
        <TabEditionMenu />
    </s.TabHeader>
);

export default TabHeaderInfo;
