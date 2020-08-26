import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'http://localhost:8000/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjBhN2RjMTI2NjQ1OTBjOTU3ZmZhZWJmN2I2NzE4Mjk3Yjg2NGJhOTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODk2NjI5NTE2ODQwLXU0cXBoOWxzczB2bTVsZzIzaHZjOTY2bG1xNXMwdWFjLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiODk2NjI5NTE2ODQwLXU0cXBoOWxzczB2bTVsZzIzaHZjOTY2bG1xNXMwdWFjLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA5ODQ4MzU5MDI1Njc0MzE4NTg3IiwiaGQiOiIyc2lkZXNvZjEuY29tIiwiZW1haWwiOiJiZXRvQDJzaWRlc29mMS5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IlVfWUlpV3VXNzZFUG5DdXl3RzBrWmciLCJuYW1lIjoiQmV0byBGaWd1ZWlyZWRvIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdpckJycmYxMlB2NjBYM2xKZVF2WG95YXVVUkpzbERDMHo5Q0IzTT1zOTYtYyIsImdpdmVuX25hbWUiOiJCZXRvIiwiZmFtaWx5X25hbWUiOiJGaWd1ZWlyZWRvIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE1OTgzOTI3OTksImV4cCI6MTU5ODM5NjM5OSwianRpIjoiOGE3OTJhNjBmNGRhODM0YWY3MTcxZmY3MTAxOWYzMDA0NjRmZjUzOSJ9.is88dQifhT8RGqPJTHcx2vgFrFBrQ6Drm-VZOB7H_Bu_nxD03AYt6gjmDBNfR6e_7notqtSzKc0q8nkFrSniEKF97goPj3dmsmXItrjXE4SCyVykT41dH8ESpS_KdcACk9-N1k8PFUORNBWee-dOop32YXRvUnx9akhQyQscLYutPT98cbsiy8_twT2fW4gnnm75BC4Y0O4YuC3qW7yQeJhiCvaj-CI-g1VqTg3XtOMLzPFBXFx1U0lhf4kNA_MaCWSvFuF20tUpTH37beszPpVTQEJdfWKHX4RDuoX05u3tAgSBSZOqNWnWqUL9fBum2nuhiseTfsmVzSB0WjNqzg';

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
