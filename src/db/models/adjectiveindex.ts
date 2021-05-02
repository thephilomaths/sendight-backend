'use strict';

import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class AdjectiveIndex extends Model {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
    static associate(_models: never) {}
  }

  AdjectiveIndex.init(
    {
      currentIndex: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: 'AdjectiveIndex',
    },
  );
  return AdjectiveIndex;
};
