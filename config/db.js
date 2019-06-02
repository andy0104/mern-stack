const mysql = require('mysql');
const config = require('config');

const db = config.get('mysqlURL');

const connectDB = async () => {
  try {
    await mysql.createConnection(db);
    console.log('MySQL Connection Established...');
  } catch (error) {
    console.log(error);
    //Exit with failure
    process.exit(1);
  }
};

module.exports = connectDB;
