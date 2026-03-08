import Redis from 'ioredis'
import { LoggerService } from 'src/packages/observability/logger/logger.service'
import { REDIS_CLIENT } from '../constants/cache.constants'

export const redisProvider = {
  provide: REDIS_CLIENT,
  inject: [LoggerService],
  useFactory: (logger: LoggerService) => {
    const redis = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: Number(process.env.REDIS_PORT) || 6379,
    })

    redis.on('connect', () => logger.info('Redis connected successfully'))
    redis.on('error', (err) => logger.error('Redis connection error', err))

    return redis
  },
}