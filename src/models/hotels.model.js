"use strict";

const hotelModel = (sequelize, DataTypes) =>
  sequelize.define("Hotel", {
    hotelName: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
    facilities: { type: DataTypes.STRING, allowNull: false },
    activitiesAndEntertainments: { type: DataTypes.STRING, allowNull: false },
    Discription: { type: DataTypes.STRING, allowNull: false },
  });

module.exports = hotelModel;
