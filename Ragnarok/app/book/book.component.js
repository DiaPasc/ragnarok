"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var book_service_1 = require("./book.service");
var BookComponent = (function () {
    function BookComponent(bookService, router) {
        this.bookService = bookService;
        this.router = router;
        this.books = [];
    }
    BookComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    BookComponent.prototype.getBooks = function () {
        var _this = this;
        var obs = this.bookService.getData().subscribe(function (books) {
            _this.books = books;
            obs.unsubscribe();
        });
    };
    BookComponent.prototype.deleteBook = function (id) {
        var _this = this;
        if (confirm("Do you want to delete this book?")) {
            var sub_1 = this.bookService.deleteBook(id).subscribe(function (data) {
                _this.getBooks();
                sub_1.unsubscribe();
            });
        }
    };
    return BookComponent;
}());
BookComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'book',
        templateUrl: 'book.component.html',
        styleUrls: ['book.component.css']
    }),
    __metadata("design:paramtypes", [book_service_1.BookService,
        router_1.Router])
], BookComponent);
exports.BookComponent = BookComponent;
//# sourceMappingURL=book.component.js.map