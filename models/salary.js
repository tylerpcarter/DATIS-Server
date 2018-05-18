'use strict';
module.exports = (sequelize, DataTypes) => {
  let salary = sequelize.define('salary', {
    employee: DataTypes.INTEGER,
    amount: DataTypes.DOUBLE,
    description: DataTypes.STRING
  }, {freezeTableName: true,
    tableName: 'salary'});
  salary.associate = function(models) {
    // associations can be defined here
  };
  return salary;
};