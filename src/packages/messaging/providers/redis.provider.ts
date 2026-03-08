import Redis from 'ioredis'
import { LoggerService } from 'src/packages/observability/logger/logger.service'
import { QUEUE_CONNECTION } from '../queue/queue.constants'

export const queueConnectionProvider = {
  provide: QUEUE_CONNECTION,
  inject: [LoggerService],
  useFactory: (logger: LoggerService) => {
    const redis = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: Number(process.env.REDIS_PORT) || 6379,
    })

    redis.on('connect', () => logger.info('Queue Redis connected successfully'))
    redis.on('error', (err) => logger.error('Queue Redis connection error', err))

    return redis
  },
}