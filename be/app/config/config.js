require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {

  dbConfig: {
    HOST: process.env.DB_HOST || "localhost",
    USER: process.env.DB_USER || "root",
    PORT: process.env.DB_PORT || 3306,
    PASSWORD: process.env.DB_PASSWORD || "Jonel.12345",
    DB: process.env.DB_NAME || "jonel123",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
};
