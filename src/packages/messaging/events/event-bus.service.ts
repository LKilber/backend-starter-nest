import { Injectable, OnModuleInit } from '@nestjs/common'
import { DiscoveryService, Reflector } from '@nestjs/core'
import { EVENT_HANDLER_METADATA } from './event.constants'

@Injectable()
export class EventBusService implements OnModuleInit {
  private handlers = new Map<string, any[]>()

  constructor(
    private readonly discovery: DiscoveryService,
    private readonly reflector: Reflector,
  ) { }

  onModuleInit() {
    const providers = this.discovery.getProviders()

    for (const provider of providers) {
      const { instance } = provider

      if (!instance) continue

      const event = this.reflector.get(
        EVENT_HANDLER_METADATA,
        instance.constructor,
      )

      if (!event) continue

      const handlers = this.handlers.get(event) || []

      handlers.push(instance)

      this.handlers.set(event, handlers)
    }
  }

  async publish(event: string, payload: any) {
    const handlers = this.handlers.get(event)

    if (!handlers) return

    for (const handler of handlers) {
      await handler.handle(payload)
    }
  }
}