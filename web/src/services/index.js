import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_BASEURL,
});

const authLink = setContext((_, { headers }) => {
    const auth_object = localStorage.getItem('auth') || '{}';
    const auth = JSON.parse(auth_object);
    const token = auth?.token || '';
    return {
        headers: {
            ...headers,
            token,
        },
    };
});

const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
};

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions,
});

export default client;
