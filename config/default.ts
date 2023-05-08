// env
require('dotenv').config(); // this is important!

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

export default {
    port: 3000,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.2mo7sm5.mongodb.net/?retryWrites=true&w=majority`,
    env: 'development',
};
