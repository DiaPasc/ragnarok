import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from './book.service';
import { Book } from './book';

@Component({
    moduleId: module.id,
    selector: 'book',
    templateUrl: 'book.component.html',
    styleUrls: ['book.component.css']
})

export class BookComponent implements OnInit {
    books: Book[] = [];

    constructor(
        private bookService: BookService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.getBooks();
    }

    getBooks() {
        let obs = this.bookService.getData().subscribe(books => {
            this.books = books as Book[];
            obs.unsubscribe();
        });
    }

    deleteBook(id: string) {
        if (confirm("Do you want to delete this book?")) {
            let sub = this.bookService.deleteBook(id).subscribe(data => {
                this.getBooks();
                sub.unsubscribe();
            });
        }
    }
}