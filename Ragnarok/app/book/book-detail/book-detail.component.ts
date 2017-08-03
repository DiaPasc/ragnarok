import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
    moduleId: module.id,
    selector: 'book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['book-detail.component.css'],
})

export class BookDetailComponent implements OnInit {
    book: Book;

    constructor(
        private router: Router,
        private bookService: BookService,
        private route: ActivatedRoute,
    ) { }

    getData(id: string) {
        let sub = this.bookService.getBook(id).subscribe(book => {
            this.book = book as Book;
            sub.unsubscribe();
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.getData(id);
        });
    }
}