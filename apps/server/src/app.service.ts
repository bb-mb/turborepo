import { Injectable } from '@nestjs/common';
import { add, minus } from '@packages/my-lib';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! - (${add(10, 20)}) (${minus(100, 20)})`;
  }
}
