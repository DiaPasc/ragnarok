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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.url = 'api/Book';
    }
    BookService.prototype.getData = function () {
        return this.http.get(this.url + "/GetData")
            .map(this.extractData)
            .catch(this.handleError);
    };
    BookService.prototype.getBook = function (id) {
        var params = new http_1.URLSearchParams();
        params.set('id', id);
        return this.http.get(this.url + "/GetBook", { search: params })
            .map(this.extractData)
            .catch(this.extractData);
    };
    BookService.prototype.editBook = function (book) {
        return this.http.post(this.url + "/EditBook/" + book.Id, book)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BookService.prototype.deleteBook = function (id) {
        var params = new http_1.URLSearchParams();
        params.set('id', id);
        return this.http.delete(this.url + "/DeleteBook", { search: params })
            .map(this.handleError);
    };
    BookService.prototype.extractData = function (res) {
        return res.json() || [];
    };
    //extractData(res: Response) {
    //    let body = res.json();
    //    return body.data || { };
    //}
    //extractData(res: Response) {
    //    let body = res.json();
    //    return body ? res.json() : {};
    //}
    //extractData(res: Response) {
    //    if (res.status < 200 || res.status >= 300) {
    //        throw new Error('Bad response status: ' + res.status);
    //    }
    //    let body = res.json();
    //    return body.data || {};
    //}
    BookService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error || '';
            var err = error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    return BookService;
}());
BookService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map