import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RoutesModule } from './routes';
import { DatabaseModule } from 'src/packages/database/database.module';
import { CacheModule } from 'src/packages/cache/cache.module';
import { LoggerModule } from 'src/packages/observability/logger/logger.module';
import { AppConfigModule } from 'src/packages/config/config.module';
import { MessagingModule } from 'src/packages/messaging/messaging.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    AppConfigModule,
    LoggerModule,
    DatabaseModule,
    CacheModule,
    MessagingModule,
    RoutesModule,
  ],
})
export class AppModule { }
