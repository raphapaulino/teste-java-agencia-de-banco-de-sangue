import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexLegend,
  ApexFill,
  ApexStroke,
  ApexTooltip,
} from 'ng-apexcharts';
import { CandidatosService } from '../../services/candidatos.service';
import { CommonModule } from '@angular/common';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  plotOptions?: ApexPlotOptions;
  dataLabels?: ApexDataLabels;
  responsive?: ApexResponsive[];
  legend?: ApexLegend;
  fill?: ApexFill;
  stroke?: ApexStroke;
  tooltip?: ApexTooltip;
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public chartOptionsImc: Partial<ChartOptions> = {};

  constructor(private candidatosService: CandidatosService) {}

  ngOnInit(): void {
    this.candidatosService.getImcPorFaixa().subscribe((dados) => {
      const imcData = dados.imcMedioPorFaixaEtaria;
      const categorias = Object.keys(imcData); // ["20-29", "30-39", ...]
      const valores = Object.values(imcData);  // [24.75, 25.5, ...]

      this.chartOptionsImc = {
        series: [
          {
            name: 'Média IMC',
            data: valores,
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
          categories: categorias,
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
      };
    });
  }
}
