import { Injectable } from '@nestjs/common';
import {
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { NameSpaces } from '../name-space/ns-list';
@Injectable()
@WebSocketGateway({ namespace: 'booking' })
export class NsBookingService implements OnGatewayConnection {
  @WebSocketServer() server: Server;
  handleConnection(client: any, ...args: any[]) {
    console.log('handleConnection');
    this.server.emit('nsRoomLoad', {
      room: new NameSpaces().roomsForNameSpace('booking'),
    });
  }
  @SubscribeMessage('createRoom')
  createRoom(socket: Socket, name: string) {
    socket.join(name);
    socket.to('123').emit('roomSend', { data: 'text' });
    return name;
  }
}
