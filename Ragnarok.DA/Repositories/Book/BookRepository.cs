using System;
using System.Data.Entity;
using System.Linq;

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
    }
}