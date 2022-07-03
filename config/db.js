require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connection.once('open', () => console.log('db connected'));
mongoose.connection.on('error', (error) => console.log(error));

function connectDB() {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    dbName: 'poke_coching',
  });
}

function disconnectDB() {
  mongoose.disconnect();
}

module.exports = {
  connectDB,
  disconnectDB,
};
