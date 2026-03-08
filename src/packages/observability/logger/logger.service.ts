import { Injectable } from '@nestjs/common';
import { AppConfigService } from 'src/packages/config/config.service';
import pino from 'pino';

@Injectable()
export class LoggerService {
  private logger: pino.Logger;

  constructor(private readonly configService: AppConfigService) {
    this.logger = pino({
      level: this.configService.logLevel,
    });
  }

  info(message: string, meta?: any) {
    this.logger.info(meta, message);
  }

  error(message: string, meta?: any) {
    this.logger.error(meta, message);
  }

  warn(message: string, meta?: any) {
    this.logger.warn(meta, message);
  }

  debug(message: string, meta?: any) {
    this.logger.debug(meta, message);
  }
}
