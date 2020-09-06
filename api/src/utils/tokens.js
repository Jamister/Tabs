const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');

const base64urlUnescape = (str) => {
    let string = str || '';
    string += Array(5 - (string.length % 4)).join('=');
    return string.replace(/-/g, '+').replace(/_/g, '/');
};

const base64urlDecode = (str) => (
    Buffer.from(base64urlUnescape(str), 'base64').toString()
);

// const extractToken = (context) => {
//     const authorization = context.req.headers.authorization || null;
//     return authorization !== null
//         ? authorization.replace('Bearer ', '')
//         : '';
// };

// const decodeJwt = (context) => {
//     const token = extractToken(context);
//     const segments = token.split('.');

//     if (segments.length !== 3) {
//         throw new Error('Not enough or too many segments');
//     }

//     const [headerSeg, payloadSeg, signature] = segments;
//     const header = JSON.parse(base64urlDecode(headerSeg));
//     const payload = JSON.parse(base64urlDecode(payloadSeg));

//     const user_external_id = (payload || {}).sub || '';
//     const user_email = (payload || {}).email || '';

//     // console.log('header', header);
//     // console.log('signature', signature);
//     // console.log('payload', payload);

//     return {
//         header,
//         payload,
//         signature,
//         user_external_id,
//         user_email,
//     };
// };

// const isExpired = (context) => {
//     const { payload, user_email } = decodeJwt(context);
//     // console.log('user_email', user_email);
//     const now = Date.now().valueOf() / 1000;
//     const expiration = (payload || {}).exp || null;
//     // console.log('expiration', expiration);
//     const is_expired = expiration === null || now > expiration;
//     // console.log('is_expired', is_expired);
//     return is_expired;
// };

const googleValidation = (token) => {
    const client = new OAuth2Client(process.env.GOOGLE_AUTH_CLIENT_ID);
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_AUTH_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        // const userid = payload.sub;
        return payload;
    }
    return verify().catch(console.error);
};

const createToken = (email) => jwt.sign(
    { email },
    process.env.SECRET,
    { expiresIn: 15552000 }, // 6 months
);

const verifyToken = (context) => {
    const token = context.req.headers.token || '';
    return jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) return { valid: false, user_email: null };
        return { valid: true, user_email: decoded.email || '' };
    });
};

module.exports = {
    isExpired: () => {},
    decodeJwt: () => {},
    googleValidation,
    createToken,
    verifyToken,
};
