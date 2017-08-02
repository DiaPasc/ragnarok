using System;
using System.Data.Entity;
using Ragnarok.DA.Book.Entity;

namespace Ragnarok.DA
{
    public class BookDBContext : DbContext
    {
        public BookDBContext(string connectionString) : base(connectionString)
        {
        }

        public BookDBContext() : base("BookContext")
        {
        }

        public DbSet<Book.Entity.Book> Books { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}

