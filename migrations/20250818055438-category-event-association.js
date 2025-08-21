'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('events', {
      fields: ['categoryId'],
      type: 'foreign key',
      name: 'category_event_association',
      references: {
        table: 'categories',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('events'), 'category_event_association'
  }
};
