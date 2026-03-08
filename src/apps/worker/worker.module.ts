import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { EmailJob } from './jobs/email.job'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [
    EmailJob,
  ],
})
export class WorkerModule { }