import { Request, Response, NextFunction, query } from 'express';

import db from '../db/models';
import { modelFindOne } from '../utils/db_utils';

export const createSlug = async (
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
): Promise<void> => {
  try {
    const { AdjectiveList, NounList, AdjectiveIndex, NounIndex } = db.sequelize.models;

    const adjectiveIndex: number = await modelFindOne(
      AdjectiveIndex,
      { attributes: ['currentIndex'] },
      'currentIndex',
    );
    const nounIndex: number = await modelFindOne(
      NounIndex,
      { attributes: ['currentIndex'] },
      'currentIndex',
    );
    let adjective: string = await modelFindOne(
      AdjectiveList,
      {
        where: { id: adjectiveIndex },
        attributes: ['word'],
      },
      'word',
    );
    let noun: string = await modelFindOne(
      NounList,
      {
        where: { id: nounIndex },
        attributes: ['word'],
      },
      'word',
    );

    await AdjectiveIndex.update(
      { currentIndex: adjectiveIndex + 1 },
      { where: { currentIndex: [adjectiveIndex] } },
    );

    await NounIndex.update(
      { currentIndex: nounIndex + 1 },
      { where: { currentIndex: [nounIndex] } },
    );

    if (!adjective) {
      adjective = await modelFindOne(
        AdjectiveList,
        { where: { id: 1 }, attributes: ['word'] },
        'word',
      );
      await AdjectiveIndex.update(
        { currentIndex: 1 },
        { where: { currentIndex: [adjectiveIndex] } },
      );
    }
    if (!noun) {
      noun = await modelFindOne(NounList, { where: { id: 1 }, attributes: ['word'] }, 'word');
      await NounIndex.update(
        { currentIndex: 1 },
        { where: { currentIndex: [nounIndex] } },
      );
    }

    res.status(200).json({ message: 'Success', data: { slug: `${adjective}-${noun}` } });
  } catch (e) {
    res.status(500).json({ message: 'Error', data: { error: 'Internal Server Error' } });
  }
};
