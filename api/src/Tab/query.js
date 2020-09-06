const { extendType, stringArg } = require('@nexus/schema');
const { AuthenticationError } = require('apollo-server-express');
const { verifyToken } = require('../utils/tokens');
const { decode } = require('../utils/hashIds');

const TabQuery = extendType({
    type: 'Query',
    definition(t) {
        // t.list.field('allTabs', {
        //     type: 'Tab',
        //     resolve: (_, args, context) => (
        //         context.prisma.tab.findMany()
        //     ),
        // });

        t.list.field('myTabs', {
            type: 'Tab',
            resolve: async (_, args, context) => {
                const { valid, user_id } = verifyToken(context);
                if (!valid) {
                    throw new AuthenticationError('You must be logged in');
                }

                const user = await context.prisma.user.findOne({
                    where: { id: user_id },
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
                hashId: stringArg(),
            },
            resolve: async (_, args, context) => {
                const tabId = decode(args.hashId);
                return context.prisma.tab.findOne({
                    where: { id: tabId },
                });
            },
        });
    },
});

module.exports = TabQuery;
