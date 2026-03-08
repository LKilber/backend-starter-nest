import { Module } from '@nestjs/common'

import { QueueService } from './queue/queue.service'
import { queueConnectionProvider } from './providers/redis.provider'

@Module({
  providers: [
    queueConnectionProvider,
    QueueService,
  ],
  exports: [
    QueueService,
  ],
})
export class MessagingModule { }