import { Injectable } from '@nestjs/common'
import pino from 'pino'

@Injectable()
export class LoggerService {
  private readonly logger = pino({
    level: process.env.LOG_LEVEL || 'info',
  })

  info(message: string, meta?: any) {
    this.logger.info(meta, message)
  }

  error(message: string, meta?: any) {
    this.logger.error(meta, message)
  }

  warn(message: string, meta?: any) {
    this.logger.warn(meta, message)
  }

  debug(message: string, meta?: any) {
    this.logger.debug(meta, message)
  }
}