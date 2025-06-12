import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
} from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  chartOptions: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
    dataLabels: ApexDataLabels;
  } = {
    series: [
      {
        name: 'Média IMC',
        data: [21.4, 22.5, 23.7, 25.3],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
    },
    title: {
      text: 'IMC por Faixa Etária',
    },
    xaxis: {
      categories: ['16-19', '20-29', '30-39', '40-49'],
    },
    dataLabels: {
      enabled: false,
    },
  };
}
