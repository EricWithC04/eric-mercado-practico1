const { Sequelize, Model } = require("sequelize");
require("dotenv").config();
const { DB_NAME, DB_USER, DB_HOST, DB_PORT, DB_DIALECT } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, "", {
  port: DB_PORT,
  host: DB_HOST,
  dialect: DB_DIALECT,
});

module.exports = {
  sequelize,
  Model,
};
