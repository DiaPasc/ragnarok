import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Book } from './book/book';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/book',
        pathMatch: 'full',
    },
    {
        path: 'book',
        component: BookComponent,
    },
    {
        path: 'detail/:id',
        component: BookDetailComponent,
    },
    {
        path: 'edit/:id',
        component: BookEditComponent,
    }
]

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
