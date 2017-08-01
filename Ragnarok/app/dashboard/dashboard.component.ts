import { Component, Input, Output, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    styleUrls: ['dashboard.component.css'],
    templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    data: string;

    constructor(private dashboardService: DashboardService) {
    }

    ngOnInit() {
        this.dashboardService.getData().subscribe((data) => {
            this.data = data;
        });
    }
}

