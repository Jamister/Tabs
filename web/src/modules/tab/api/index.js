import { gql } from '@apollo/client';

export const CREATE_TAB = gql`
    mutation CreateTab($tab: String) {
        createTab(tab: $tab) {
            hashId
            tab
        }
    }
`;

export const SAVE_TAB = gql`
    mutation SaveTab(
        $hashId: String
        $title: String
        $tab: String
    ) {
        saveTab(
            hashId: $hashId
            title: $title
            tab: $tab
        ) {
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

export const GET_TAB = gql`
    query Tab($tabId: String!) {
        tab(tabId: $tabId) {
            hashId
            tab
            title
        }
    }
`;
