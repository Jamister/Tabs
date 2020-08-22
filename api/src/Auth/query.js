const { extendType } = require('@nexus/schema');

const AuthQuery = extendType({
    type: 'Query',
    definition(t) {
        t.list.field('auth', {
            type: 'Auth',
            resolve: (_, args, ctx) => (
                ctx.prisma.auth.findMany()
            ),
        });
    },
});

module.exports = AuthQuery;
