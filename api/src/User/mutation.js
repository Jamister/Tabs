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
                const tokenInfo = await googleValidation(token);
                const isValidGoogleToken = true;
                if (!isValidGoogleToken) {
                    throw new Error('Invalid google token');
                }

                const userEmail = tokenInfo.email;
                const userName = tokenInfo.name;
                const userExternalId = tokenInfo.sub;
                const userImageUrl = tokenInfo.picture;
                const existingUser = await context.prisma.user.findOne({
                    where: { email: userEmail },
                });
                if (!existingUser) {
                    const newUser = await context.prisma.user.create({
                        data: {
                            email: userEmail,
                            name: userName,
                            externalId: userExternalId,
                            imageUrl: userImageUrl,
                        },
                    });
                    const newToken = createToken(newUser.id);
                    return { token: newToken, user: newUser };
                }
                const newToken = createToken(existingUser.id);
                return { token: newToken, user: existingUser };
            },
        });
    },
});

module.exports = UserMutation;
