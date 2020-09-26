import retrieveUserInfo from 'modules/user/utils/retrieveUserInfo';

const isVirtualKeyboardActive = () => {
    const virtualKeyboard = retrieveUserInfo('virtualKeyboard');
    const isActive = virtualKeyboard || false;
    return isActive;
};

export default isVirtualKeyboardActive;
