import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService implements OnModuleInit {
  readonly vault: any;
  readonly scheduledPayment: any;
  readonly autoPayRule: any;

  async onModuleInit() {
    return;
  }
}
