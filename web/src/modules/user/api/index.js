import { gql } from '@apollo/client';

export const ENTER = gql`
    mutation Enter($token: String) {
        enter(token: $token) {
            token,
            user {
                name
                email
                imageUrl
            }
        }
    }
`;
