'use strict';

import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class NounList extends Model {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
    static associate(_models: never) {}
  }
  NounList.init(
    {
      word: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'NounList',
    },
  );
  return NounList;
};
