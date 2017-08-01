import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

//Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//Services
import { DashboardService } from './dashboard/dashboard.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    providers: [DashboardService],
    bootstrap: [AppComponent]
})
export class AppModule { }
