import { Inject, Injectable } from '@nestjs/common'
import Redis from 'ioredis'

import { REDIS_CLIENT } from './constants/cache.constants'
import { CacheInterface } from './interfaces/cache.interface'

@Injectable()
export class CacheService implements CacheInterface {
  constructor(
    @Inject(REDIS_CLIENT)
    private readonly redis: Redis,
  ) { }

  async get<T>(key: string): Promise<T | null> {
    const value = await this.redis.get(key)

    if (!value) return null

    try {
      return JSON.parse(value) as T
    } catch {
      return null
    }
  }

  async set(key: string, value: unknown, ttl?: number): Promise<void> {
    const data = JSON.stringify(value)

    if (ttl) {
      await this.redis.set(key, data, 'EX', ttl)
      return
    }

    await this.redis.set(key, data)
  }

  async del(key: string): Promise<void> {
    await this.redis.del(key)
  }

  async exists(key: string): Promise<boolean> {
    const result = await this.redis.exists(key)
    return result === 1
  }

  async increment(key: string, value = 1): Promise<number> {
    return this.redis.incrby(key, value)
  }
}