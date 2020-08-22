const { objectType } = require('@nexus/schema');

const Auth = objectType({
    name: 'Auth',
    definition(t) {
        t.model.id();
        t.model.token();
        t.model.userId();
    },
});

module.exports = Auth;
