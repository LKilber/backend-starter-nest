import { PrismaService } from '../prisma.service'

export class BaseRepository {
  constructor(protected readonly prisma: PrismaService) { }
}