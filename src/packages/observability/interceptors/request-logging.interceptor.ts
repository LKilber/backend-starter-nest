import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'

import { tap } from 'rxjs/operators'
import { LoggerService } from '../logger/logger.service'

@Injectable()
export class RequestLoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: LoggerService) { }

  intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest()

    const start = Date.now()

    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - start

        this.logger.info('request completed', {
          method: request.method,
          url: request.url,
          duration,
        })
      }),
    )
  }
}