const { extendType, stringArg } = require('@nexus/schema');
const { AuthenticationError } = require('apollo-server-express');
const { verifyToken } = require('../utils/tokens');
const { decodeId } = require('../utils/hashIds');

const TabQuery = extendType({
    type: 'Query',
    definition(t) {
        t.list.field('myTabs', {
            type: 'Tab',
            resolve: async (_, args, context) => {
                const { valid, userId } = verifyToken(context);
                if (!valid) {
                    throw new AuthenticationError('You must be logged in');
                }

                const user = await context.prisma.user.findOne({
                    where: { id: userId },
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
                tabId: stringArg(),
            },
            resolve: async (_, args, context) => {
                const tabId = decodeId(args.tabId);
                return context.prisma.tab.findOne({
                    where: { id: tabId },
                });
            },
        });
    },
});

module.exports = TabQuery;
