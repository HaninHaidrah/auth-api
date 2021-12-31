"use strict";
require("dotenv").config();

const ItemsModel = (sequelize, DataTypes) =>
  sequelize.define("Item", {
    text: { type: DataTypes.STRING, required: true },
    assignee: {
      type: DataTypes.STRING,
    },
    complete: { type: DataTypes.BOOLEAN, defaultValue: false },
    difficulty: { type: DataTypes.STRING, defaultValue: 1 },
  });

module.exports = ItemsModel;
