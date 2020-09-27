const { objectType } = require('@nexus/schema');
const { encodeId } = require('../utils/hashIds');

const User = objectType({
    name: 'User',
    definition(t) {
        t.model.id();
        t.string('hashId', (user) => encodeId(user.id));
        // t.model.externalId();
        t.model.email();
        t.model.imageUrl();
        t.model.name();
        t.model.username();
        t.model.virtualKeyboard();
        t.model.tabs();
        t.model.folders();
    },
});

module.exports = User;
