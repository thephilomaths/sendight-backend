/* eslint-disable */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('AdjectiveIndices', [{
      currentIndex: 1,
      createdAt: Date.now(),
      updatedAt: Date.now()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('AdjectiveIndices', null, {});
  }
};
