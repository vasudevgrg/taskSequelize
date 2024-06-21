'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.belongsToMany(models.User, {
        through:'UserPayment',
        foreignKey: 'payment_id',
        otherKey: 'user_id',
        onDelete: 'CASCADE' 
      })
    }
  }
  Payment.init({
    payment: DataTypes.STRING,
    // user_id:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Payment',
    tableName:'Payment'
  });
  return Payment;
};