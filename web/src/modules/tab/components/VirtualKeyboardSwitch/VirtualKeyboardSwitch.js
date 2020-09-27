import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { Switch } from 'antd';
import * as s from './VirtualKeyboardSwitch.style';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

// Api
import { UPDATE_USER } from 'modules/user/api';

// Utils
import retrieveUserInfo from 'modules/user/utils/retrieveUserInfo';
import updateUserInfoOnLocalstorage from 'modules/user/utils/updateUserInfoOnLocalstorage';

const VirtualKeyboardSwitch = () => {
    const [updateUser, { data }] = useMutation(UPDATE_USER);
    const virtualKeyboard = retrieveUserInfo('virtualKeyboard') || false;
    const [keyboardActive, setKeyboard] = useState(() => virtualKeyboard);

    useEffect(() => {
        console.log(data);
    }, [data]);

    function onChange(checked) {
        updateUserInfoOnLocalstorage({
            field: 'virtualKeyboard',
            value: checked,
        });
        setKeyboard(checked);
        updateUser({
            variables: {
                virtualKeyboard: checked,
            },
        });
    }

    return (
        <s.VirtualKeyboardWrapper>
            <FontAwesomeIcon icon={faKeyboard} />
            <span>Virtual keyboard: </span>
            <Switch checked={keyboardActive} onChange={onChange} />
        </s.VirtualKeyboardWrapper>
    );
};

export default VirtualKeyboardSwitch;
