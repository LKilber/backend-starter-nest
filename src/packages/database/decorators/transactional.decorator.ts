import { PrismaService } from '../prisma.service'

export function Transactional() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value

    descriptor.value = async function (...args: any[]) {
      const prisma: PrismaService = this.prisma

      return prisma.$transaction(async (tx) => {
        return originalMethod.apply(
          { ...this, prisma: tx },
          args,
        )
      })
    }

    return descriptor
  }
}