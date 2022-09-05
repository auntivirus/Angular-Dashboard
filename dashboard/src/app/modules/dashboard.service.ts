import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  Card1() {
    return [71,78,39,66]
  };
  Card2() {
    return [23,67,73,44,69,11];
  };
  Card3() {
    return [11,12,13,14,15];
  };
  pieChart() {
    return [
        ['Chrome', 58.9],
        ['Firefox', 13.29],
        ['Edge', 12],
        ['Internet Explorer', 3.78],
        ['Opera',2.29],
        ['Safari', 4],
        {
            name: 'Others',
            y: 5.32,
            dataLabels: {
                enabled: true
            }
        }
    ]
  };
}
