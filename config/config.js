const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    sessionSecret: process.env.SESSION_SECRET,
    port: process.env.PORT,
    connectionString: process.env.CONNECTION_STRING,
    clientUrl: process.env.CLIENT_URL,
};
