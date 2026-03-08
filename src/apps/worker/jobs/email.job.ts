import { Injectable, OnModuleInit } from '@nestjs/common'

@Injectable()
export class EmailJob implements OnModuleInit {

  onModuleInit() {
    console.log('📧 Email job ready')
  }

}