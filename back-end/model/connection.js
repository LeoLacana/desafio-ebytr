// const { MongoClient } = require('mongodb');

// const OPTIONS = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// };

// const MONGO_DB_URL = 'mongodb://localhost:27017/ToDoListEbytr';
// const DB_NAME = 'ToDoListEbytr';

// let db = null;

// function connection() {
//     return db
//     ? Promise.resolve(db)
//     : MongoClient.connect(MONGO_DB_URL, OPTIONS)
//     .then((conn) => {
//     db = conn.db(DB_NAME);
//     return db;
//     });
// }

// module.exports = connection;

// models/connection.js

const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = () => {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db('ToDoListEbytr');
    return db;
    })
};

module.exports = connection;