import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResolverModule } from './resolver/resolver.module';
import { VaultModule } from './vault/vault.module';
import { AuctionModule } from './auction/auction.module';
import { LoggingMiddleware } from './logging.middleware';

@Module({
  imports: [ResolverModule, VaultModule, AuctionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}

