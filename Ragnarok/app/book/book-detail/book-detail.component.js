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
var book_service_1 = require("../book.service");
var BookDetailComponent = (function () {
    function BookDetailComponent(router, bookService, route) {
        this.router = router;
        this.bookService = bookService;
        this.route = route;
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getData(id);
        });
    };
    BookDetailComponent.prototype.getData = function (id) {
        var _this = this;
        var sub = this.bookService.getBook(id).subscribe(function (book) {
            _this.book = book;
            sub.unsubscribe();
        });
    };
    return BookDetailComponent;
}());
BookDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'book-detail',
        templateUrl: './book-detail.component.html',
        styleUrls: ['book-detail.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        book_service_1.BookService,
        router_1.ActivatedRoute])
], BookDetailComponent);
exports.BookDetailComponent = BookDetailComponent;
//# sourceMappingURL=book-detail.component.js.map