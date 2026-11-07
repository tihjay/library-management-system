import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const sciFi = await prisma.genre.create({
    data: { name: 'Science Fiction' },
  });

  const fantasy = await prisma.genre.create({
    data: { name: 'Fantasy' },
  });

  const mystery = await prisma.genre.create({
    data: { name: 'Mystery' },
  });

  const history = await prisma.genre.create({
    data: { name: 'History' },
  });

  await prisma.book.createMany({
    data: [
      { title: 'Dune', author: 'Frank Herbert', genreId: sciFi.id },
      { title: 'Foundation', author: 'Isaac Asimov', genreId: sciFi.id },
      { title: 'Neuromancer', author: 'William Gibson', genreId: sciFi.id },
      { title: 'Snow Crash', author: 'Neal Stephenson', genreId: sciFi.id },

      { title: 'The Hobbit', author: 'J.R.R. Tolkien', genreId: fantasy.id },
      { title: 'The Fellowship of the Ring', author: 'J.R.R. Tolkien', genreId: fantasy.id },
      { title: 'The Two Towers', author: 'J.R.R. Tolkien', genreId: fantasy.id },
      { title: 'Mistborn', author: 'Brandon Sanderson', genreId: fantasy.id },

      { title: 'Gone Girl', author: 'Gillian Flynn', genreId: mystery.id },
      { title: 'The Da Vinci Code', author: 'Dan Brown', genreId: mystery.id },
      { title: 'Big Little Lies', author: 'Liane Moriarty', genreId: mystery.id },
      { title: 'Sherlock Holmes', author: 'Arthur Conan Doyle', genreId: mystery.id },

      { title: 'Sapiens', author: 'Yuval Noah Harari', genreId: history.id },
      { title: 'The Silk Roads', author: 'Peter Frankopan', genreId: history.id },
      { title: 'Guns, Germs, and Steel', author: 'Jared Diamond', genreId: history.id }
    ]
  });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });