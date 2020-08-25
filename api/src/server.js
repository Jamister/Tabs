require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { applyMiddleware } = require('graphql-middleware');

const { schema } = require('./schema');
const { permissions } = require('./permissions');
const { prisma } = require('./context');

const middleware = [permissions];
const schemaWithMiddleware = applyMiddleware(schema, ...middleware);

const server = new ApolloServer({
    schema: schemaWithMiddleware,
    context: (req) => ({
        ...req,
        prisma,
    }),
});

const app = express();

server.applyMiddleware({ app });

app.listen({ port: process.env.PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
});
