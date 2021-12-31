"use strict";

const room = (sequelize, DataTypes) =>
  sequelize.define("Room", {
    accommodationType: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.STRING, allowNull: false },
    Sleeps: { type: DataTypes.STRING, allowNull: false },
    hotelid: { type: DataTypes.INTEGER, allowNull: false },
    img1:{ type: DataTypes.STRING, allowNull: false },
    img2:{ type: DataTypes.STRING, allowNull: false },
    img3:{ type: DataTypes.STRING, allowNull: false },
    heroImage:{ type: DataTypes.STRING, allowNull: false },
    Extras:{ type: DataTypes.STRING, allowNull: false },
    size:{ type: DataTypes.STRING, allowNull: false }
  });

module.exports = room;
