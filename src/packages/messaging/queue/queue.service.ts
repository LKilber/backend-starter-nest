import { Inject, Injectable } from '@nestjs/common'
import { Queue } from 'bullmq'
import Redis from 'ioredis'

import { QUEUE_CONNECTION } from './queue.constants'

@Injectable()
export class QueueService {
  private queue: Queue

  constructor(
    @Inject(QUEUE_CONNECTION)
    private readonly redis: Redis,
  ) {
    this.queue = new Queue('default', {
      connection: redis,
    })
  }

  async add(jobName: string, payload: any) {
    await this.queue.add(jobName, payload)
  }
}