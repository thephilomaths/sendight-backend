'use strict';

import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class AdjectiveList extends Model {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
    static associate(_models: never) {}
  }
  AdjectiveList.init(
    {
      word: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'AdjectiveList',
    },
  );
  return AdjectiveList;
};
