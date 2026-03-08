import Redis from 'ioredis'
import { QUEUE_CONNECTION } from '../queue/queue.constants'

export const queueConnectionProvider = {
  provide: QUEUE_CONNECTION,
  useFactory: () => {
    return new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: Number(process.env.REDIS_PORT) || 6379,
    })
  },
}