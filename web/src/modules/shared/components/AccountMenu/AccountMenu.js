import React from 'react';
import * as s from './AccountMenu.style';
import { Menu, Dropdown } from 'antd';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUser, faCaretDown, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const AccountMenu = () => {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <s.LinkPad to="/account">
                    <FontAwesomeIcon icon={faUser} /> Minha conta
                </s.LinkPad>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">
                <s.LinkPad to="/sign/out">
                    <FontAwesomeIcon icon={faSignOutAlt} /> Sair
                </s.LinkPad>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown
            overlay={menu}
            placement="bottomRight"
            trigger={['click']}
        >
            <s.AccountMenu>
                <FontAwesomeIcon icon={faUserCircle} />
                Beto
                <FontAwesomeIcon icon={faCaretDown} />
            </s.AccountMenu>
        </Dropdown>
    );
};

export default AccountMenu;
