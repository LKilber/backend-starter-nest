import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RoutesModule } from './routes';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    RoutesModule,
  ],
})
export class AppModule { }
