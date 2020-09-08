import { gql } from '@apollo/client';

export const CREATE_TAB = gql`
    mutation CreateTab($tab: String) {
        createTab(tab: $tab) {
            hashId
            tab
        }
    }
`;

export const ASSIGN_TABS = gql`
    mutation AssignTabs($tabsIds: String!) {
        assignTabs(tabsIds: $tabsIds) {
            hashId
            title
            author
            tune
            private
        }
    }
`;

export const MY_TABS = gql`
    query MyTabs {
        myTabs {
            hashId
            title
            author
            tune
            private
        }
    }
`;
