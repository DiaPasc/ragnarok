using System;

namespace Ragnarok.DA.Repositories
{
    public interface IBookRepository : IBaseRepository<Book.Entity.Book>
    {
        Book.Entity.Book[] List();
        void Create(Book.Entity.Book book);
        void Update(Book.Entity.Book book);
        void Save();
    }
}