import { Inject, Injectable } from '@nestjs/common'
import { Queue } from 'bullmq'
import type { ConnectionOptions } from 'bullmq'

import { QUEUE_CONNECTION } from './queue.constants'

@Injectable()
export class QueueService {
  private queue: Queue

  constructor(
    @Inject(QUEUE_CONNECTION)
    private readonly redis: ConnectionOptions,
  ) {
    this.queue = new Queue('default', {
      connection: redis,
    })
  }

  async add(jobName: string, payload: any) {
    await this.queue.add(jobName, payload)
  }
}