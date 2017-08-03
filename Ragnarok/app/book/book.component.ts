import { Component, OnInit, } from '@angular/core';
import { Router} from '@angular/router';

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

    private getBooks() {
        let obs = this.bookService.getData().subscribe(books => {
            this.books = books as Book[];
            obs.unsubscribe();
        });
    }

    ngOnInit(): void {
        this.getBooks();
    }
}