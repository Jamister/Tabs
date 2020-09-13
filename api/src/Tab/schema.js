const { objectType } = require('@nexus/schema');
const { encodeId } = require('../utils/hashIds');

const Tab = objectType({
    name: 'Tab',
    definition(t) {
        t.model.id();
        t.string('hashId', (tab) => encodeId(tab.id));
        t.model.title();
        t.model.artist();
        t.model.tuning();
        t.model.instrument();
        t.model.content();
        t.model.private();
        t.model.user();
        t.model.folder();
    },
});

module.exports = Tab;
