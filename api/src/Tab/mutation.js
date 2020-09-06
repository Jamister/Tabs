const { extendType, stringArg } = require('@nexus/schema');
const { verifyToken } = require('../utils/tokens');

const UserMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.field('createTab', {
            type: 'Tab',
            args: {
                tab: stringArg(),
            },
            resolve: async (parent, args, context) => {
                const { valid, user_email } = verifyToken(context);
                if (valid) {
                    const user = await context.prisma.user.findOne({
                        where: { email: user_email },
                    });
                    return context.prisma.tab.create({
                        data: {
                            tab: args.tab,
                            user: { connect: { id: user.id } },
                        },
                    });
                }
                return context.prisma.tab.create({
                    data: {
                        tab: args.tab,
                    },
                });
            },
        });
    },
});

module.exports = UserMutation;
