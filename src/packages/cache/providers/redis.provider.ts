import Redis from 'ioredis'
import { REDIS_CLIENT } from '../cache.constants'

export const redisProvider = {
  provide: REDIS_CLIENT,
  useFactory: () => {
    return new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: Number(process.env.REDIS_PORT) || 6379,
    })
  },
}