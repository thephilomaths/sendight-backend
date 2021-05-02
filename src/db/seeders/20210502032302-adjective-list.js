/* eslint-disable */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const fs = require('fs');
    const data = fs.readFileSync('./seeders/seed_data/english-adjectives.txt', 'utf-8').split('\n');
    let seedData = [];
    data.forEach(adjective => {
      seedData.push({ word: adjective, createdAt: Date.now(), updatedAt: Date.now() });
    })
    await queryInterface.bulkInsert('AdjectiveLists', seedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('AdjectiveLists', null, {});
  }
};
