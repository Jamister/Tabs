require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { schema } = require('./schema');
const { createContext } = require('./context');
const config = require('./config');

const server = new ApolloServer({ schema, context: createContext });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: config.PORT }, () => console.log(`🚀 Server ready at http://localhost:${config.PORT}${server.graphqlPath}`));
