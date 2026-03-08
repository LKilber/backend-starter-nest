import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly config: ConfigService) { }

  get port(): number {
    return this.config.get<number>('PORT', 3000);
  }

  get corsOrigin(): string {
    return this.config.get<string>('CORS_ORIGIN', '*');
  }

  get jwtSecret(): string {
    return this.config.get<string>('JWT_SECRET', 'default_secret');
  }

  get redisHost(): string {
    return this.config.get<string>('REDIS_HOST', 'localhost');
  }

  get redisPort(): number {
    return this.config.get<number>('REDIS_PORT', 6379);
  }

  get logLevel(): string {
    return this.config.get<string>('LOG_LEVEL', 'info');
  }
}
