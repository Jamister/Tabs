const Hashids = require('hashids/cjs');

const { SALT } = process.env;
const HASH_SIZE = 8;
const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-';

const hashids = new Hashids(SALT, HASH_SIZE, ALPHABET);

const encodeId = (id) => hashids.encode(Number(id));
const decodeId = (id) => hashids.decode(id)[0];

const hashIds = {
    encodeId,
    decodeId,
};

module.exports = hashIds;
