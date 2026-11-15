import { Injectable } from '@nestjs/common';

@Injectable()
export class GenresService {
  create(createGenreDto: any) {
    return createGenreDto;
  }

  findAll() {
    return [];
  }

  findOne(id: number) {
    return { id };
  }

  update(id: number, updateGenreDto: any) {
    return { id, ...updateGenreDto };
  }

  remove(id: number) {
    return { id };
  }
}