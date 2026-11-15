import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  create(createBookDto: any) {
    return createBookDto;
  }

  async findAll(
    genreId?: string,
    search?: string,
    page = 1,
    limit = 10,
  ) {
    const where: any = {};

    if (genreId) {
      where.genreId = Number(genreId);
    }

    if (search) {
      where.OR = [
        {
          title: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          author: {
            contains: search,
            mode: 'insensitive',
          },
        },
      ];
    }

    return {
      where,
      skip: (page - 1) * limit,
      take: limit,
    };
  }

  findOne(id: number) {
    return { id };
  }

  update(id: number, updateBookDto: any) {
    return { id, ...updateBookDto };
  }

  remove(id: number) {
    return { id };
  }
}
