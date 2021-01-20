import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {
    console.log('it has started too!');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
