using System;

namespace Ragnarok.DA.Repositories
{
    public interface IBookRepository : IBaseRepository<Book.Entity.Book>
    {
        Book.Entity.Book[] List();
    }
}