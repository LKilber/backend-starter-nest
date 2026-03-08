import { SetMetadata } from '@nestjs/common'
import { EVENT_HANDLER_METADATA } from './event.constants'

export const EventHandler = (eventName: string) =>
  SetMetadata(EVENT_HANDLER_METADATA, eventName)