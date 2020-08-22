const { objectType } = require('@nexus/schema');

const User = objectType({
    name: 'User',
    definition(t) {
        t.model.id();
        t.model.email();
        t.model.password();
        t.model.name();
        t.model.username();
        t.model.tabs();
    },
});

module.exports = User;
