import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routing } from './app.routing';
import { MaterialModule } from '@angular/material';

//Components
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';

//Services
import { BookService } from './book/book.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        Routing,
        MaterialModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        BookComponent,
        BookDetailComponent
    ],
    providers: [BookService],
    bootstrap: [AppComponent]
})
export class AppModule { }
