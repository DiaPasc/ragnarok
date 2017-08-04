import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
    moduleId: module.id,
    selector: 'book-edit',
    templateUrl: './book-edit.component.html',
    styleUrls: ['./book-edit.component.css']
})

export class BookEditComponent implements OnInit {
    book: Book = <Book>{
        Id: undefined,
        Title: '',
        Author: '',
        Year: undefined,
        Description: ''
    }

    constructor(
        private bookService: BookService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.getData(id);
        });
    }

    getData(id: string) {
        let sub = this.bookService.getBook(id).subscribe(book => {
            this.book = book as Book;
            sub.unsubscribe();
        });
    }

    editBook(): void {
        let sub = this.bookService.editBook(this.book).subscribe(book => {
            sub.unsubscribe();
        });
    }

}