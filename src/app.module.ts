import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayGateway } from './socketio/gateway.gateway';
import { NsBookingService } from './socketio/ns-booking/ns-booking.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GatewayGateway, NsBookingService],
})
export class AppModule {}
