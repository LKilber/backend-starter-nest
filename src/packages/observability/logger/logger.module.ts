import { Global, Module } from '@nestjs/common'
import { LoggerService } from './logger.service'
import { AppConfigModule } from 'src/packages/config/config.module'

@Global()
@Module({
  imports: [AppConfigModule],
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule { }