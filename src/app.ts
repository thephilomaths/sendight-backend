import express from 'express';
import cors from 'cors';

import { createSlug } from './controllers/slugController';

const app = express();
const port = 8000;

app.use(cors());

app.get('/', (_, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.get('/slug', (req, res, next) => {
  createSlug(req, res, next).then();
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  return console.log('Server listening at port: ', port);
});
