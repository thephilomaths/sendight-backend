/* eslint-disable */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('NounIndices', [{
      currentIndex: 1,
      createdAt: Date.now(),
      updatedAt: Date.now()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('NounIndices', null, {});
  }
};
