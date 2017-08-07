using System;
using System.Data.Entity;
using System.Linq;
using Ragnarok.DA.Book.Entity;
using System.Data.Entity.Infrastructure;

namespace Ragnarok.DA.Repositories
{
    public class BookRepository : BaseRepository<Book.Entity.Book>, IBookRepository
    {
        public BookRepository(DbContext context, UnitOfWork unitOfWork)
            : base(context, unitOfWork)
        { }

        public Book.Entity.Book[] List()
        {
            return dbSet.ToArray();
        }

        public Book.Entity.Book GetById(Guid id)
        {
            return dbSet.FirstOrDefault(x => x.Id == id);
        }

        public void Update(Book.Entity.Book book)
        {
            Book.Entity.Book dbBook = dbSet.Find(book.Id);

            dbBook.Title = book.Title;
            dbBook.Author = book.Author;
            dbBook.Year = book.Year;
            dbBook.Description = book.Description;
        }

        public void Delete(Guid id)
        {
            Book.Entity.Book book = dbSet.SingleOrDefault(x => x.Id == id);
            dbSet.Remove(book);
        }
    }
}
