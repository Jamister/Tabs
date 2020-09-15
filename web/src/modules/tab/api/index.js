import { gql } from '@apollo/client';

export const CREATE_TAB = gql`
    mutation CreateTab($content: String) {
        createTab(content: $content) {
            hashId
            content
        }
    }
`;

export const SAVE_TAB = gql`
    mutation SaveTab(
        $hashId: String
        $title: String
        $artist: String
        $tuning: String
        $instrument: String
        $content: String
        # $private: Boolean
    ) {
        saveTab(
            hashId: $hashId
            title: $title
            artist: $artist
            tuning: $tuning
            instrument: $instrument
            content: $content
            # private: $private
        ) {
            hashId
        }
    }
`;

export const ASSIGN_TABS = gql`
    mutation AssignTabs($tabsIds: String!) {
        assignTabs(tabsIds: $tabsIds) {
            hashId
            title
            artist
            tuning
            instrument
            private
        }
    }
`;

export const MY_TABS = gql`
    query MyTabs {
        myTabs {
            hashId
            title
            artist
            tuning
            instrument
            private
        }
    }
`;

export const GET_TAB = gql`
    query Tab($tabId: String!) {
        tab(tabId: $tabId) {
            hashId
            title
            artist
            tuning
            instrument
            content
            private
        }
    }
`;
