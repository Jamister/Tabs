const { extendType } = require('@nexus/schema');

const UserQuery = extendType({
    type: 'Query',
    definition(t) {
        // t.list.field('users', {
        //     type: 'User',
        //     resolve: (_, args, context) => context.prisma.user.findMany(),
        // });

        // t.field('me', {
        //     type: 'User',
        //     nullable: true,
        //     resolve: (parent, args, context) => {
        //         const userId = getUserId(context);
        //         return context.prisma.user.findOne({
        //             where: { id: userId },
        //         });
        //     },
        // });
    },
});

module.exports = UserQuery;
