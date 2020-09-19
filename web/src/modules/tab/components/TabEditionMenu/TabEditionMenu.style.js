import styled from 'styled-components';
import { Menu } from 'antd';

const { Item } = Menu;

export const TabMenuWrapper = styled.div`
	position: absolute;
	top: 50px;
	right: 0;
`;

export const MenuItem = styled(Item)`
	padding: 0;

    > button {
        color: #323232;

        > svg {
            margin-right: 8px;
            color: #A1ABB4;
        }
    }
`;
