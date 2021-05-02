import db from '../db/models';
import { Request, Response, NextFunction } from 'express';

export const createSlug = async (
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
): Promise<void> => {
  const { AdjectiveList, NounList, AdjectiveIndex, NounIndex } = db.sequelize.models;
  const adjectiveIndex: number = (
    await AdjectiveIndex.findOne({ attributes: ['currentIndex'] })
  ).get('currentIndex');
  const nounIndex: number = (
    await NounIndex.findOne({ attributes: ['currentIndex'] })
  ).get('currentIndex');
  let adjective: string = (
    await AdjectiveList.findOne({ where: { id: adjectiveIndex }, attributes: ['word'] })
  ).get('word');
  let noun: string = (
    await NounList.findOne({ where: { id: nounIndex }, attributes: ['word'] })
  ).get('word');
  await AdjectiveIndex.update(
    { currentIndex: adjectiveIndex + 1 },
    { where: { currentIndex: [adjectiveIndex] } },
  );
  await NounIndex.update({ currentIndex: nounIndex + 1 }, { where: { currentIndex: [nounIndex] } });
  if (!adjective) {
    adjective = (await AdjectiveList.findOne({ where: { id: 1 }, attributes: ['word'] })).get(
      'word',
    );
    await AdjectiveIndex.update({ currentIndex: 1 }, { where: { currentIndex: [adjectiveIndex] } });
  }
  if (!noun) {
    noun = (await NounList.findOne({ where: { id: 1 }, attributes: ['word'] })).get('word');
    await NounIndex.update({ currentIndex: 1 }, { where: { currentIndex: [nounIndex] } });
  }
  res.status(200).json({ slug: `${adjective}-${noun}` });
};
