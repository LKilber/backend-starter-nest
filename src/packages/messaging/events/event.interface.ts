export interface EventHandlerInterface<T = any> {
  handle(payload: T): Promise<void> | void
}