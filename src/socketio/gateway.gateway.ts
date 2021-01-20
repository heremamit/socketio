import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { Server } from 'http';

import { NameSpaces } from './name-space/ns-list';

@WebSocketGateway()
export class GatewayGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  afterInit(server: Server) {
    console.log('afterInit');
  }
  handleConnection(client: any, ...args: any[]) {
    console.log('handleConnection');
    this.sendNameSpaceLest();
  }
  handleDisconnect(client: any) {
    console.log('handleDisconnect');
  }
  sendNameSpaceLest() {
    this.server.emit('nsList', new NameSpaces().nameSpaceList);
  }

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: any, @ConnectedSocket() socket: Socket) {
    return data;
  }
}
