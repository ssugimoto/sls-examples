import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! my';
  }

  getSay(): string {
    return 'say.';
  }
}
