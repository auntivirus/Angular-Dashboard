import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

 Highcharts = Highcharts;
 chartOptions = {};
 @Input() data = [];

  ngOnInit(): void {
    HC_exporting(this.Highcharts);
    this.chartOptions = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false,
          backgroundColor: 'rgb(66,66,66)',
      },
      title: {
        style: {
          color: 'white',
        },
          text: 'Browser<br>shares<br>2017',
          align: 'center',
          verticalAlign: 'middle',
          y: 60
      },
      subtitle: {
        enabled: false,
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      exporting: {
        enabled: true,
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
          pie: {
              dataLabels: {
                  enabled: true,
                  distance: -50,
                  style: {
                      fontWeight: 'bold',
                      color: 'white'
                  }
              },
              startAngle: -90,
              endAngle: 90,
              center: ['50%', '75%'],
              size: '110%'
          }
      },
      series: [{
          type: 'pie',
          name: 'Browser share',
          innerSize: '50%',
          data: this.data,
      }]
  };
  }
}
