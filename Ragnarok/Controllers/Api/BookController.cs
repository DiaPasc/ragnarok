using Ragnarok.DA;
using Ragnarok.DA.Repositories;
using Ragnarok.Models;
using System;
using System.Linq;
using System.Web.Http;

namespace Ragnarok.Controllers.Api
{
    public class BookController : ApiController
    {
        private BookDBContext dbContext;
        private UnitOfWork unitOfWork;

        public BookController()
        {
            dbContext = new BookDBContext();
            unitOfWork = new UnitOfWork(dbContext);
        }

        [HttpGet]
        public Book[] GetData()
        {
            Book[] books = unitOfWork.BookRepository.List().Select(x => new Book
            {
                Id = x.Id,
                Title = x.Title,
                Author = x.Author,
                Year = x.Year,
                Description = x.Description
            }).ToArray();

            return books;
        }

        [HttpGet]
        public IHttpActionResult GetBook(Guid id)
        {
            Ragnarok.DA.Book.Entity.Book book = unitOfWork.BookRepository.GetById(id);
            return Ok(new Book
            {
                Id = book.Id,
                Title = book.Title,
                Author = book.Author,
                Year = book.Year,
                Description = book.Description
            });
        }

        [HttpPost]
        public IHttpActionResult EditBook(Book book)
        {
            unitOfWork.BookRepository.Update(new DA.Book.Entity.Book
            {
                Id = book.Id,
                Title = book.Title,
                Author = book.Author,
                Year = book.Year,
                Description = book.Description
            });

            unitOfWork.Save();

            return Ok();
        }
    }
}