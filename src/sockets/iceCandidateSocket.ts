import { Server, Socket } from 'socket.io';

interface IICECandidatePayload {
  candidate: never;
  target: string;
}

export const iceCandidateSocket = (io: Server, socket: Socket): void => {
  socket.on('ice-candidate', (data: IICECandidatePayload): void => {
    console.log(data);
    io.to(data.target).emit('ice-candidate', data.candidate);
  });
};
