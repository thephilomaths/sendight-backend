import { Server } from 'http';
import { Server as SocketServer, Socket } from 'socket.io';

import { roomLeaveSocket, roomSocket } from './roomSocket';
import { offerSocket } from './offerSocket';
import { answerSocket } from './answerSocket';
import { iceCandidateSocket } from './iceCandidateSocket';

export const initSocket = (server: Server): void => {
  const io = new SocketServer(server, {
    cors: {
      origin: '*',
    },
    serveClient: false,
  });

  io.on('connection', (socket: Socket): void => {
    roomSocket(io, socket);
    roomLeaveSocket(io, socket);
    offerSocket(io, socket);
    answerSocket(io, socket);
    iceCandidateSocket(io, socket);
  });
};
