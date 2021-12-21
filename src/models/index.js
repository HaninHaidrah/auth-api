"use strict";

const userModel = require("./users.js");
const clothesModel = require("../models/clothes");
const foodModel = require("../models/food");
const itemModel = require("../models/items.model");
const electronicModel =require ("../models/electronics");
const Collection = require("../models/data-collection");

const { Sequelize, DataTypes } = require("sequelize");

const DATABASE_URL = process.env.DATABASE_URL || "sqlite:memory;";
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};
const sequelize = new Sequelize(DATABASE_URL,sequelizeOptions);

const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
const items = itemModel(sequelize, DataTypes);
const electronics=electronicModel(sequelize,DataTypes)

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  food: new Collection(food),
  clothes: new Collection(clothes),
  items: new Collection(items),
  electronics:new Collection(electronics)
};
