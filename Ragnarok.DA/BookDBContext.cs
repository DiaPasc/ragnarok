using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

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
        
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}