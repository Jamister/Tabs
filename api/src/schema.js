const { nexusSchemaPrisma } = require('nexus-plugin-prisma/schema');
const { makeSchema } = require('@nexus/schema');

const { AuthPayload } = require('./AuthPayload');
const { Tab, TabQuery, TabMutation } = require('./Tab');
const { User, UserQuery, UserMutation } = require('./User');

const AuthType = [AuthPayload];
const TabType = [Tab, TabQuery, TabMutation];
const UserType = [User, UserQuery, UserMutation];

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
