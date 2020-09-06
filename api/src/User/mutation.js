const { extendType, stringArg } = require('@nexus/schema');
const { googleValidation, createToken } = require('../utils/tokens');

const UserMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.field('enter', {
            type: 'AuthPayload',
            args: {
                token: stringArg(),
            },
            resolve: async (parent, args, context) => {
                const { token } = args;
                const token_info = await googleValidation(token);
                const isValidGoogleToken = true;
                if (!isValidGoogleToken) {
                    throw new Error('Invalid google token');
                }

                const user_email = token_info.email;
                const user_name = token_info.name;
                const user_external_id = token_info.sub;
                const user_image_url = token_info.picture;
                const new_token = createToken(user_email);

                const existing_user = await context.prisma.user.findOne({
                    where: { email: user_email },
                });
                if (!existing_user) {
                    const new_user = await context.prisma.user.create({
                        data: {
                            email: user_email,
                            name: user_name,
                            externalId: user_external_id,
                            imageUrl: user_image_url,
                        },
                    });
                    return { token: new_token, user: new_user };
                }
                return { token: new_token, user: existing_user };
            },
        });
    },
});

module.exports = UserMutation;
