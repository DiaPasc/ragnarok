namespace Ragnarok.DA.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly BookDBContext dbContext;

        private IBookRepository bookRepository;

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