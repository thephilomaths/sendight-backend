import express from 'express';
import http, { Server } from 'http';
import cors from 'cors';

import { createSlug } from './controllers/slugController';
import { initSocket } from './sockets';

const app = express();
const server: Server = http.createServer(app);
const port = 8000;

app.use(cors());

initSocket(server);

app.get('/slug', (req, res, next) => {
  createSlug(req, res, next).then();
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  return console.log('Server listening at port: ', port);
});
