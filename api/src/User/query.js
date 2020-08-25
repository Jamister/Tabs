const { extendType } = require('@nexus/schema');

const UserQuery = extendType({
    type: 'Query',
    definition(t) {
        t.list.field('users', {
            type: 'User',
            resolve: (_, args, ctx) => ctx.prisma.user.findMany(),
        });

        // t.field('me', {
        //     type: 'User',
        //     nullable: true,
        //     resolve: (parent, args, ctx) => {
        //         const userId = getUserId(ctx);
        //         return ctx.prisma.user.findOne({
        //             where: { id: userId },
        //         });
        //     },
        // });
    },
});

module.exports = UserQuery;
