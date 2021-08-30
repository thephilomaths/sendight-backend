import { Server, Socket } from 'socket.io';

interface IOfferPayload {
  offer: never;
  target: string;
}

export const offerSocket = (io: Server, socket: Socket): void => {
  socket.on('offer', (data: IOfferPayload): void => {
    console.log(data);
    io.to(data.target).emit('offer', data.offer);
  });
};
