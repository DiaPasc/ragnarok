using System;
using System.Data.Entity;

namespace Ragnarok.DA.Book.Entity
{
    public class Book
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Author { get; set; }

        public int Year { get; set; }

        public string Description { get; set; }
    }
}