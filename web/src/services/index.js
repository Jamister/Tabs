import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'http://localhost:8000/graphql',
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

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
