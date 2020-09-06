const Hashids = require('hashids/cjs');

const { SALT } = process.env;
const HASH_SIZE = 8;
const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-';

const hashids = new Hashids(SALT, HASH_SIZE, ALPHABET);

const encode = (id) => hashids.encode(Number(id));
const decode = (id) => hashids.decode(id)[0];

const hashIds = {
    encode,
    decode,
};

module.exports = hashIds;
