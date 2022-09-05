import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  card1 = [];
  card2 = [];
  card3 = [];
  pieChart = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.card1 = this.dashboardService.Card1();
    this.card2 = this.dashboardService.Card2();
    this.card3 = this.dashboardService.Card3();
    this.pieChart = this.dashboardService.pieChart();
  }

}
