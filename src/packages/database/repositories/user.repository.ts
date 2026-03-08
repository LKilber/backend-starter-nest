import { Injectable } from "@nestjs/common";
import { BaseRepository } from "./base.repository";

@Injectable()
export class UsersRepository extends BaseRepository {
  async findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    })
  }
}