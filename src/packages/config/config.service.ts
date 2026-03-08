import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AppConfigService {
  constructor(private readonly config: ConfigService) { }

  get port(): number {
    return this.config.get<number>('PORT', 3000)
  }

  get corsOrigin(): string {
    return this.config.get<string>('CORS_ORIGIN', '*')
  }
}