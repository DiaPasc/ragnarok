import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routing } from './app.routing';
import { MaterialModule } from '@angular/material';

//Components
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';

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
        BookComponent
    ],
    providers: [BookService],
    bootstrap: [AppComponent]
})
export class AppModule { }
