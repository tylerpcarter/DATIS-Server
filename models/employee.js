'use strict';
module.exports = (sequelize, DataTypes) => {
  let employee = sequelize.define('employee', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    role: DataTypes.STRING,
    thumbnail: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'employee'});
  employee.associate = function(models) {
        employee.hasMany(models.salary, {
            foreignKey: 'employee'
          });
        
          employee.hasMany(models.deduction, {
                foreignKey: 'employee'
              });
            
          employee.hasMany(models.bonus, {
            foreignKey: 'employee'
          });
  };
  return employee;
};