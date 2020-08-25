const { extendType, stringArg } = require('@nexus/schema');
const { decodeJwt } = require('../utils/tokens');

const UserMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.field('enter', {
            type: 'AuthPayload',
            args: {
                token: stringArg(),
                externalId: stringArg(),
                name: stringArg(),
                email: stringArg(),
            },
            resolve: async (parent, { token, externalId, name, email }, context) => {
                const existing_user = await context.prisma.user.findOne({
                    where: { email },
                });

                if (!existing_user) {
                    const token_info = decodeJwt(token);
                    const { user_id, user_email } = token_info;
                    const info_diff_from_token = (
                        user_id.toString() !== externalId || email !== user_email
                    );
                    if (info_diff_from_token) {
                        throw new Error('Wrong info');
                    }
                    const new_user = await context.prisma.user.create({
                        data: { name, email, externalId },
                    });
                    return { token, user: new_user };
                }

                return { token, user: existing_user };
            },
        });
    },
});

module.exports = UserMutation;
