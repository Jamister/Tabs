/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import * as s from './TabHeaderInfo.style';

// Components
import TitleInput from 'modules/tab/components/TitleInput';
import TabEditionMenu from 'modules/tab/components/TabEditionMenu';

const TabHeaderInfo = () => {

    return (
        <s.TabHeader>
            <TitleInput />
            <TabEditionMenu />
        </s.TabHeader>
    );
};

export default TabHeaderInfo;
