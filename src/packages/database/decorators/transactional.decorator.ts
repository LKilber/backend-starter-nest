import { PrismaService } from '../prisma.service';

export function Transactional() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const prisma = this.prisma as PrismaService;

      return (prisma as any).$transaction(async (tx: any) => {
        return originalMethod.apply({ ...this, prisma: tx }, args);
      });
    };

    return descriptor;
  };
}
