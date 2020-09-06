const { extendType, intArg } = require('@nexus/schema');
const { AuthenticationError } = require('apollo-server-express');
const { verifyToken } = require('../utils/tokens');

const TabQuery = extendType({
    type: 'Query',
    definition(t) {
        t.list.field('allTabs', {
            type: 'Tab',
            resolve: (_, args, context) => (
                context.prisma.tab.findMany()
            ),
        });

        t.list.field('myTabs', {
            type: 'Tab',
            resolve: async (_, args, context) => {
                const { valid, user_email } = verifyToken(context);
                if (!valid) {
                    throw new AuthenticationError('You must be logged in');
                }

                const user = await context.prisma.user.findOne({
                    where: { email: user_email },
                });
                if (user) {
                    return context.prisma.tab.findMany({
                        where: {
                            user: {
                                id: user.id,
                            },
                        },
                    });
                }

                throw new Error('User not found');
            },
        });

        t.field('tab', {
            type: 'Tab',
            args: {
                id: intArg(),
            },
            resolve: (_, { id }, context) => (
                context.prisma.tab.findOne({
                    where: { id },
                })
            ),
        });
    },
});

module.exports = TabQuery;
