const { extendType, stringArg } = require('@nexus/schema');
const { decodeJwt } = require('../utils/tokens');

const UserMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.field('enter', {
            type: 'AuthPayload',
            args: {
                externalId: stringArg(),
                name: stringArg(),
                email: stringArg(),
                imageUrl: stringArg(),
            },
            resolve: async (parent, args, context) => {
                const {
                    externalId,
                    name,
                    email,
                    imageUrl,
                } = args;
                const existing_user = await context.prisma.user.findOne({
                    where: { email },
                });
                if (!existing_user) {
                    const { user_external_id, user_email } = decodeJwt(context);
                    const info_diff_from_token = (
                        user_external_id !== externalId || email !== user_email
                    );
                    if (info_diff_from_token) {
                        throw new Error('Wrong info');
                    }
                    const new_user = context.prisma.user.create({
                        data: { name, email, externalId, imageUrl },
                    });
                    return { user: new_user };
                }
                return { user: existing_user };
            },
        });
    },
});

module.exports = UserMutation;
