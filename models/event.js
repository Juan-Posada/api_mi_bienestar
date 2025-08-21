'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsTo(models.Category)
      models.Category.hasMany(Event)
    }
  }
  Event.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    categoryId: DataTypes.INTEGER,
    state: DataTypes.STRING,
    maxCapacity: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'Events'
  });
  return Event;
};