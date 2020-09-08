const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');

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

const createToken = (userId) => jwt.sign(
    { userId },
    process.env.SECRET,
    { expiresIn: 15552000 }, // 6 months
);

const verifyToken = (context) => {
    const token = context.req.headers.token || '';
    return jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) return { valid: false, userId: 0 };
        return { valid: true, userId: decoded.userId || 0 };
    });
};

module.exports = {
    googleValidation,
    createToken,
    verifyToken,
};
