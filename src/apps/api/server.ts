import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'

import helmet from 'helmet'
import compression from 'compression'

import { AppModule } from './app.module'
import { AppConfigService } from 'src/packages/config/config.service'
import { RequestLoggingInterceptor } from 'src/packages/observability/interceptors/request-logging.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = app.get(AppConfigService)

  const port = config.port
  const corsOrigin = config.corsOrigin

  app.setGlobalPrefix('api')

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  )

  app.use(helmet())
  app.use(compression())

  app.useGlobalInterceptors(
    new RequestLoggingInterceptor(logger),
  )

  app.enableCors({
    origin: corsOrigin,
    credentials: true,
  })

  await app.listen(port)

  console.log(`🚀 Server running on http://localhost:${port}`)
}

bootstrap()