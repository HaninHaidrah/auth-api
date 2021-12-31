'use strict';

const electronicModel = (sequelize, DataTypes) => sequelize.define('Electronics', {
    categoryAssociation:{type: DataTypes.STRING, required: true},
  name: { type: DataTypes.STRING, required: true },
  description: { type: DataTypes.STRING, required: true },
  price: { type: DataTypes.STRING, required: true },
  inventoryCount:{type: DataTypes.STRING, required: true},
  img:{type: DataTypes.STRING, required: true},
  initial:{type: DataTypes.STRING, required: true}
});

module.exports = electronicModel;
