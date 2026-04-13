console.log("DEBUG MONGO_URI:", URI);
const { MongoClient } = require('mongodb');
require('dotenv').config();

const URI = process.env.MONGO_URI;

module.exports = async function (callback) {
  const client = new MongoClient(URI, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to database');
    return callback(client);
  } catch (e) {
    console.error(e);
    return callback(null, e);
  }
};