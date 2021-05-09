import db from '../db/models';

const { AdjectiveList, NounList, AdjectiveIndex, NounIndex } = db.sequelize.models;

export const modelFindOne = (
  model: typeof AdjectiveList | typeof NounList | typeof AdjectiveIndex | typeof NounIndex,
  query: { where?: Record<string, number | string>; attributes?: string[] },
  item: string = null,
): Promise<
  | string
  | number
  | typeof AdjectiveList
  | typeof NounList
  | typeof AdjectiveIndex
  | typeof NounIndex
> => {
  return model
    .findOne(query)
    .then(
      (
        modelEntry:
          | typeof AdjectiveList
          | typeof NounList
          | typeof AdjectiveIndex
          | typeof NounIndex,
      ) => {
        if (modelEntry && item) {
          return modelEntry.get(item);
        }
        return modelEntry;
      },
    );
};
