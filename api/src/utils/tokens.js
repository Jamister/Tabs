const base64urlUnescape = (str) => {
    let string = str || '';
    string += Array(5 - (string.length % 4)).join('=');
    return string.replace(/-/g, '+').replace(/_/g, '/');
};

const base64urlDecode = (str) => (
    Buffer.from(base64urlUnescape(str), 'base64').toString()
);

const extractToken = (context) => {
    const authorization = context.req.headers.authorization || null;
    return authorization !== null
        ? authorization.replace('Bearer ', '')
        : null;
};

const decodeJwt = (token) => {
    const segments = token.split('.');

    if (segments.length !== 3) {
        throw new Error('Not enough or too many segments');
    }

    const [headerSeg, payloadSeg, signature] = segments;
    const header = JSON.parse(base64urlDecode(headerSeg));
    const payload = JSON.parse(base64urlDecode(payloadSeg));

    const user_external_id = (payload || {}).sub || '';
    const user_email = (payload || {}).email || '';

    return {
        header,
        payload,
        signature,
        user_external_id,
        user_email,
    };
};

const isExpired = (decoded) => {
    const now = Date.now().valueOf() / 1000;
    const expiration = ((decoded || {}).payload || {}).exp || null;
    const is_expired = expiration === null || now > expiration;
    return is_expired;
};

module.exports = {
    extractToken,
    decodeJwt,
    isExpired,
};
