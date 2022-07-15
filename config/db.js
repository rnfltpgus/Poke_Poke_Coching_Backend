require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connection.once('open', () => console.log('db connected'));
mongoose.connection.on('error', (error) => console.log(error));

const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    dbName: 'poke_coaching',
  });
};

const disconnectDB = () => {
  mongoose.disconnect();
};

module.exports = {
  connectDB,
  disconnectDB,
};
