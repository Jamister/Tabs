const { objectType } = require('@nexus/schema');
const { encode } = require('../utils/hashIds');

const User = objectType({
    name: 'User',
    definition(t) {
        t.model.id();
        t.string('hashId', (user) => encode(user.id));
        // t.model.externalId();
        t.model.email();
        t.model.imageUrl();
        t.model.name();
        t.model.username();
        t.model.tabs();
    },
});

module.exports = User;
