import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//import { RedisIoAdapter } from './socketio/sockeio.redis';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
//cfRPijR1uGFv45GcAAAA
//DpNHfvAsgk64MnfcAAAA
