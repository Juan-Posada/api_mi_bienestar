'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Events', {
      fields: ['categoryId'],
      type: 'foreign key',
      name: 'category_event_association', // nombre único de la FK
      references: {
        table: 'Categories',
        key: 'id', // 👈 mejor usar "key" en vez de "field"
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', // o 'CASCADE' según lo que quieras
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Events', 'category_event_association');
  }
};
