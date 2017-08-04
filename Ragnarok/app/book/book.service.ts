import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router, Params } from '@angular/router';
import { Book } from './book';

@Injectable()
export class BookService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private url = 'api/Book';
    constructor(private http: Http) { }

    getData(): Observable<Book[]> {
        return this.http.get(`${this.url}/GetData`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getBook(id: string): Observable<Book> {
        let params = new URLSearchParams();
        params.set('id', id);
        return this.http.get(`${this.url}/GetBook`, { search: params })
            .map(this.extractData)
            .catch(this.extractData);
    } 

    editBook(book: Book): Observable<Book[]> { 
        return this.http.post(`${this.url}/EditBook/${book.Id}`, book)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    extractData(res: Response) {
        return res.json() || [];
    }

    handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error || '';
            const err = error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}