/* eslint-disable */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const fs = require('fs');
    const data = fs.readFileSync('./seeders/seed_data/english-nouns.txt', 'utf-8').split('\n');
    let seedData = [];
    data.forEach(adjective => {
      seedData.push({ word: adjective, createdAt: Date.now(), updatedAt: Date.now() });
    })
    await queryInterface.bulkInsert('NounLists', seedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('NounLists', null, {});
  }
};
