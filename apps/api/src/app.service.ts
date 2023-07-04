import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return { msg: `Hello Muni Chen Chen! - ${Date.now().toString()}` };
  }
}
