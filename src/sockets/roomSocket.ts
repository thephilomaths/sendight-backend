import { Server, Socket } from 'socket.io';

const MAX_ROOM_MEMBERS = 2;

export const roomSocket = (io: Server, socket: Socket): void => {
  socket.on('join-room', (roomSlug: string): void => {
    let clients: string[] = getClients(io, roomSlug);
    if (!canConnect(clients)) {
      socket.emit('error', { message: 'Room is full' });
      return;
    }

    socket.join(roomSlug);

    // Getting updated room members
    clients = getClients(io, roomSlug);
    if (clients.length == MAX_ROOM_MEMBERS) {
      emitPeerJoinedEvent(io, clients);
    }
  });
};

const getClients = (io: Server, room: string): string[] => {
  const clients = io.sockets.adapter.rooms.get(room) || [];
  return [...clients];
};

const canConnect = (clients: string[]): boolean => {
  return clients.length < MAX_ROOM_MEMBERS;
};

const emitPeerJoinedEvent = (io: Server, clients: string[]): void => {
  io.to(clients[0]).emit('peer-joined', { id: clients[1], role: 'peer' });
  io.to(clients[1]).emit('peer-joined', { id: clients[0], role: 'creator' });
};
