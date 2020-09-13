const { objectType } = require('@nexus/schema');

const Folder = objectType({
    name: 'Folder',
    definition(t) {
        t.model.id();
        t.model.name();
        t.model.tabs();
        t.model.user();
    },
});

module.exports = Folder;
