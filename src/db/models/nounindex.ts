'use strict';

import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class NounIndex extends Model {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
    static associate(_models: never) {}
  }

  NounIndex.init(
    {
      currentIndex: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: 'NounIndex',
    },
  );
  return NounIndex;
};
