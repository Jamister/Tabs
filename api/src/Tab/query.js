const { extendType, stringArg, intArg } = require('@nexus/schema');

const TabQuery = extendType({
    type: 'Query',
    definition(t) {
        t.list.field('tabs', {
            type: 'Tab',
            resolve: (_, args, ctx) => (
                ctx.prisma.tab.findMany()
            ),
        });

        t.field('tab', {
            type: 'Tab',
            args: {
                id: intArg(),
            },
            resolve: (_, { id }, ctx) => (
                ctx.prisma.tab.findOne({
                    where: { id },
                })
            ),
        });
    },
});

module.exports = TabQuery;
