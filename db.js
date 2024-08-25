const mongoose = require('mongoose');
require('dotenv').config();

const mongo_uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
