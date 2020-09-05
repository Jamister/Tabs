const { extendType, stringArg } = require('@nexus/schema');
const { decodeJwt } = require('../utils/tokens');

const UserMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.field('createTab', {
            type: 'Tab',
            args: {
                tab: stringArg(),
            },
            resolve: async (parent, args, context) => {
                const { user_email } = decodeJwt(context);
                const user = await context.prisma.user.findOne({
                    where: { email: user_email },
                });
                if (user) {
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
