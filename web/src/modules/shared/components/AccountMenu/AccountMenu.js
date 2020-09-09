import React from 'react';
import { useLocation } from 'react-router-dom';
import * as s from './AccountMenu.style';
import { Menu, Dropdown } from 'antd';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons';

// Components
import SignOutButton from 'modules/user/components/SignOutButton';

// Utils
import isUserLogged from 'modules/user/utils/isUserLogged';
import retrieveUserInfo from 'modules/user/utils/retrieveUserInfo';

const AccountMenu = () => {
    const location = useLocation();
    const isAtSignInPage = location.pathname === '/sign/in';

    if (isAtSignInPage) return null;

    if (!isUserLogged()) {
        return (
            <s.SignInButton to="/sign/in">
                Entrar
            </s.SignInButton>
        );
    }

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <s.LinkPad to="/account">
                    <FontAwesomeIcon icon={faUser} /> Minha conta
                </s.LinkPad>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">
                <SignOutButton />
            </Menu.Item>
        </Menu>
    );

    const userName = retrieveUserInfo('name');
    return (
        <Dropdown
            overlay={menu}
            placement="bottomRight"
            trigger={['click']}
        >
            <s.AccountMenu>
                <FontAwesomeIcon icon={faUserCircle} />
                {userName}
                <FontAwesomeIcon icon={faCaretDown} />
            </s.AccountMenu>
        </Dropdown>
    );
};

export default AccountMenu;
