const { nexusSchemaPrisma } = require('nexus-plugin-prisma/schema');
const { makeSchema } = require('@nexus/schema');

const { Auth, AuthQuery } = require('./Auth');
const { Tab, TabQuery } = require('./Tab');
const { User, UserMutation } = require('./User');

const AuthType = [Auth, AuthQuery];
const TabType = [Tab, TabQuery];
const UserType = [User, UserMutation];

const schema = makeSchema({
    types: [
        ...AuthType,
        ...TabType,
        ...UserType,
    ],
    plugins: [nexusSchemaPrisma()],
    outputs: {
        schema: `${__dirname}/../schema.graphql`,
        typegen: `${__dirname}/generated/nexus.ts`,
    },
    typegenAutoConfig: {
        contextType: 'Context.Context',
        sources: [
            {
                source: '@prisma/client',
                alias: 'prisma',
            },
            {
                source: require.resolve('./context'),
                alias: 'Context',
            },
        ],
    },
});

module.exports = { schema };
