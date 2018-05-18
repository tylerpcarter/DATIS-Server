'use strict';
module.exports = (sequelize, DataTypes) => {
  let bonus = sequelize.define('bonus', {
    employee: DataTypes.INTEGER,
    amount: DataTypes.DOUBLE,
    description: DataTypes.STRING
  }, {freezeTableName: true,
    tableName: 'bonus'});
  bonus.associate = function(models) {
    // associations can be defined here
  };
  return bonus;
};