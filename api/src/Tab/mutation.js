const { extendType } = require('@nexus/schema');
const { extractToken, decodeJwt } = require('../utils/tokens');

const UserMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.field('createDraft', {
            type: 'Tab',
            args: {},
            resolve: async (parent, args, ctx) => {
                const token = extractToken(ctx);
                const { user_external_id } = decodeJwt(token);
                const user = await ctx.prisma.user.findOne({
                    where: { externalId: user_external_id },
                });
                return ctx.prisma.post.create({
                    data: {
                        user: { connect: { id: user.id } },
                    },
                });
            },
        });
    },
});

module.exports = UserMutation;
