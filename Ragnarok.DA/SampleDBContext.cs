using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Ragnarok.DA
{
    public class SampleDBContext : DbContext
    {
        public SampleDBContext(string connectionString) : base(connectionString)
        {
        }

        public SampleDBContext() : base("BookContext")
        {
        }
        
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}