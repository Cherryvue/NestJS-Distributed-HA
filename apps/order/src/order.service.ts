import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  getHello(a: string, b: number, c: { elo: number; isOk?: boolean }): string {
    console.log(a, b, c);
    return 'Hello World!';
  }
}
