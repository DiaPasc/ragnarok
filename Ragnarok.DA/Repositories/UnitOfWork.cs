using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ragnarok.DA.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {

        private IBookRepository bookRepository;
        private BookDBContext dbContext;

        public UnitOfWork(BookDBContext dbContext)
        {
            this.dbContext = dbContext;
        }


        public IBookRepository BookRepository
        {
            get
            {
                if (bookRepository == null)
                {
                    bookRepository = new BookRepository(dbContext, this);
                }

                return bookRepository;
            }
        }

        public void Save()
        {
            dbContext.SaveChanges();
        }

        public void Dispose()
        {
            if (dbContext != null)
            {
                dbContext.Dispose();
            }
        }
    }
}