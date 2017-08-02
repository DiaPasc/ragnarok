using System;

namespace Ragnarok.DA.Repositories
{
    public interface IUnitOfWork: IDisposable
    {
        IBookRepository BookRepository { get; }
        void Save();
    }
}