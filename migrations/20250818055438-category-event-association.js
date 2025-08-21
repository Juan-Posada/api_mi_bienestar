'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Events', {
      fields: ['categoryId'],
      type: 'foreign key',
      name: 'category_event_association',
      references: {
        table: 'Categories',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Events'), 'category_event_association'
  }
};
