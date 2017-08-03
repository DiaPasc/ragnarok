"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var book_component_1 = require("./book/book.component");
var book_detail_component_1 = require("./book/book-detail/book-detail.component");
var routes = [
    {
        path: '',
        redirectTo: '/book',
        pathMatch: 'full',
    },
    {
        path: 'book',
        component: book_component_1.BookComponent,
    },
    {
        path: 'detail/:id',
        component: book_detail_component_1.BookDetailComponent,
    }
];
exports.Routing = router_1.RouterModule.forRoot(routes, { useHash: true });
//# sourceMappingURL=app.routing.js.map