import { Module } from '@nestjs/common'

import { HealthModule } from '../modules/health/health.module'
import { AuthModule } from 'src/packages/auth/auth.module'

@Module({
  imports: [
    HealthModule,
    AuthModule
  ],
})
export class RoutesModule { }