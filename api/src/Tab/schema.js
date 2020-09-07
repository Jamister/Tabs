const { objectType } = require('@nexus/schema');
const { encode } = require('../utils/hashIds');

const Tab = objectType({
    name: 'Tab',
    definition(t) {
        t.model.id();
        t.string('hashId', (tab) => encode(tab.id));
        t.model.title();
        t.model.author();
        t.model.tune();
        t.model.tab();
        t.model.link();
        t.model.private();
        t.model.user();
    },
});

module.exports = Tab;
