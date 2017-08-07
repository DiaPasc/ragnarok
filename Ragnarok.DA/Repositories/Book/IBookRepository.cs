using System;

namespace Ragnarok.DA.Repositories
{
    public interface IBookRepository : IBaseRepository<Book.Entity.Book>
    {
        Book.Entity.Book[] List();
        Book.Entity.Book GetById(Guid id);
        void Update(Book.Entity.Book book);
        void Delete(Guid id);
    }
}