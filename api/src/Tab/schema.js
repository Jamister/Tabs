const { objectType } = require('@nexus/schema');

const Tab = objectType({
    name: 'Tab',
    definition(t) {
        t.model.id();
        t.model.musicName();
        t.model.author();
        t.model.tune();
        t.model.tab();
        t.model.link();
        t.model.private();
        t.model.userId();
    },
});

module.exports = Tab;
