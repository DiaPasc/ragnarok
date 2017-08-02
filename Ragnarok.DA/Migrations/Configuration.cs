namespace Ragnarok.DA.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    public sealed class Configuration : DbMigrationsConfiguration<Ragnarok.DA.BookDBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Ragnarok.DA.BookDBContext context)
        {
            Guid bookID1 = new Guid("01ebd2d3-8845-4b9d-a899-b6223cf0aaa8");
            Guid bookID2 = new Guid("67c75c5e-28cc-4fe5-bcb4-51a9369c826e");
            Guid bookID3 = new Guid("fad5b6f4-5e45-430c-8984-251c928f4670");
            Guid bookID4 = new Guid("920eebdc-1ffc-4b16-9553-31bc1a2811d2");
            Guid bookID5 = new Guid("09c3e89e-4ff1-48db-bc8f-8a72df1a6b5e");

            context.Books.AddOrUpdate(p => p.Id,
                new Book.Entity.Book
                {
                    Id = bookID1,
                    Title = "Don Quixote",
                    Author = "Miguel de Cervantes",
                    Year = 1605,
                    Description = "Don Quixote"
                },
                new Book.Entity.Book
                {
                    Id = bookID2,
                    Title = "The Count Of Monte Cristo",
                    Author = "Alexandre Dumas",
                    Year = 1844,
                    Description = "The Count Of Monte Cristo"
                },
                new Book.Entity.Book
                {
                    Id = bookID3,
                    Title = "Anna Karenina",
                    Author = "Leo Tolstoy",
                    Year = 1877,
                    Description = "Anna Karenina"
                },
                new Book.Entity.Book
                {
                    Id = bookID4,
                    Title = "The Picture Of Dorian Gray",
                    Author = "Oscar Wilde",
                    Year = 1890,
                    Description = "The Picture Of Dorian Gray"
                },
                new Book.Entity.Book
                {
                    Id = bookID5,
                    Title = "Frankenstein",
                    Author = "Mary Shelley",
                    Year = 1818,
                    Description = "Frankenstein"
                });
            context.SaveChanges();
        }
    }
}

