import React from 'react';
import { gql, useQuery } from '@apollo/client';

export const GET_USERS = gql`
    query getUsers {
        users {
            hashid
            name
        }
    }
`;

const Test1 = () => {
    const { loading, error, data } = useQuery(GET_USERS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log('data', data);

    return (
        <div>
            <button type="button">Test1</button>
        </div>
    );
};

export default Test1;
