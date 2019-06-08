require('dotenv').config();

db.createUser({
    user: process.env.MONGO_USERNAME,
    pwd: process.env.MONGO_PASSWORD,
    roles: [
        { roles: 'readWrite', db: process.env.MONGO_DATABASE }
    ]
});