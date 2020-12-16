const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/ecotreecare', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    console.log(`MongoDB connected to: ${conn.connection.host}`.green.bold);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

}

module.exports = connectDB;