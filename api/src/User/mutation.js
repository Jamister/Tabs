const { extendType, idArg, stringArg } = require('@nexus/schema');

const UserMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.field('createUser', {
            type: 'User',
            args: {
                email: stringArg(),
                nome: stringArg(),
                tabId: idArg(),
            },
            resolve: (_, args, ctx) => {
                const {
                    email,
                    nome,
                    tabId,
                } = args;
                return ctx.prisma.user.create({
                    data: {
                        email,
                        nome,
                        tab: {
                            connect: { id: Number(tabId) },
                        },
                    },
                });
            },
        });
    },
});

module.exports = UserMutation;
