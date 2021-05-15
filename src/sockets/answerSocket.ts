import { Server, Socket } from 'socket.io';

interface IAnswerPayload {
  answer: never;
  target: string;
}

export const answerSocket = (io: Server, socket: Socket): void => {
  socket.on('answer', (data: IAnswerPayload): void => {
    console.log(data);
    io.to(data.target).emit('answer', data.answer);
  });
};
