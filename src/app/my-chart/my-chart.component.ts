import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.scss'],
})
export class MyChartComponent implements OnInit {

  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = 'chart';
  chartCallback;
  chartOptions = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: this.months
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Jane',
      data: [1, 0, 4,1,2,3,6,7,8,4,1,6]
    }, {
      name: 'John',
      data: [1, 0, 4,1,2,3,6,7,8,4,1,6]
    }]
  };
  constructor() { }

  ngOnInit() {}

}
