const { rule, shield } = require('graphql-shield');
const { extractToken, decodeJwt, isExpired } = require('../utils/tokens');

const rules = {
    isAuthenticatedUser: rule()((parent, args, context) => {
        const token = extractToken(context);
        const token_decoded = decodeJwt(token);
        return !isExpired(token_decoded);
    }),
    // isTabOwner: rule()(async (parent, { id }, context) => {
    //     const token = extractToken(context);
    //     const { user_external_id } = decodeJwt(token);
    //     const user = await context.prisma
    //         .tab.findOne({
    //             where: { externalId: user_external_id },
    //         })
    //         .user();
    //     return user_external_id === user.externalId;
    // }),
};

const permissions = shield({
    Query: {
        users: rules.isAuthenticatedUser,
        // me: rules.isAuthenticatedUser,
        // filterPosts: rules.isAuthenticatedUser,
        // post: rules.isAuthenticatedUser,
    },
    // Mutation: {
    //     createDraft: rules.isAuthenticatedUser,
    //     deletePost: rules.isTabOwner,
    //     publish: rules.isTabOwner,
    // },
});

module.exports = {
    permissions,
};
