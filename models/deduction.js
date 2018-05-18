'use strict';
module.exports = (sequelize, DataTypes) => {
  let deduction = sequelize.define('deduction', {
    employee: DataTypes.INTEGER,
    type: DataTypes.BOOLEAN,
    amount: DataTypes.DOUBLE,
    description: DataTypes.STRING
  }, {freezeTableName: true,
    tableName: 'deduction'});
  deduction.associate = function(models) {
    // associations can be defined here
  };
  return deduction;
};