import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import * as s from './TabEditionMenu.style';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

// Components
import ExportTabButton from '../ExportTabButton';
import DeteleTabButton from '../DeteleTabButton';

// Utils
import isUserLogged from 'modules/user/utils/isUserLogged';

const TabEditionMenu = () => {
    const menu = (
        <Menu>
            <s.MenuItem key="1">
                <ExportTabButton />
            </s.MenuItem>
            {isUserLogged() && <Menu.Divider key="2" />}
            {isUserLogged() && (
                <s.MenuItem key="3">
                    <DeteleTabButton />
                </s.MenuItem>
            )}
        </Menu>
    );

    return (
        <s.TabMenuWrapper>
            <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                <Button type="clear">
                    <FontAwesomeIcon icon={faEllipsisV} />
                </Button>
            </Dropdown>
        </s.TabMenuWrapper>
    );
};
export default TabEditionMenu;
