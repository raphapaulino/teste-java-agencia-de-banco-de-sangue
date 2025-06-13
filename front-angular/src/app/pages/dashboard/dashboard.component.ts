import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis, 
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
  yaxis?: ApexYAxis;
};

export type PieChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  title?: ApexTitleSubtitle;
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
  public chartOptionsCandidatosPorEstado: Partial<ChartOptions> = {};
  public chartOptionsPercentualObesosPorSexo: Partial<PieChartOptions> = {};
  public chartOptionsMediaIdadePorTipoSanguineo: Partial<ChartOptions> = {};
  public chartOptionsDoadoresPorReceptor: Partial<ChartOptions> = {};

  constructor(private candidatosService: CandidatosService) {}

  ngOnInit(): void {
    this.candidatosService.getImcPorFaixa().subscribe((imcData) => {
      if (!imcData) return;
      const categorias = Object.keys(imcData); // ["20-29", "30-39", ...]
      const valores = Object.values(imcData); // [24.75, 25.5, ...]

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

    this.candidatosService.getDistribuicaoPorEstado().subscribe((candidatosPorEstadoData) => {
      if (!candidatosPorEstadoData) return;
      const categorias = Object.keys(candidatosPorEstadoData); // ["RR", "RS", ...]
      const valores = Object.values(candidatosPorEstadoData); // [12, 9, ...]

      this.chartOptionsCandidatosPorEstado = {
        series: [
          {
            name: 'Candidatos',
            data: valores,
          },
        ],
        chart: {
          type: 'bar',
        },
        xaxis: {
          categories: categorias,
        },
      };
    });

    this.candidatosService.percentualObesidade().subscribe((percentualObesosPorSexoData) => {
      if (!percentualObesosPorSexoData) return;
      const categorias = Object.keys(percentualObesosPorSexoData);
      const valores = Object.values(percentualObesosPorSexoData).map((v) =>
        parseFloat(v.toFixed(2))
      );

      this.chartOptionsPercentualObesosPorSexo = {
        chart: {
          type: 'pie',
          height: 350,
        },
        title: {
          text: 'Percentual de Obesos por Sexo',
          align: 'center',
        },
        labels: categorias,
        series: valores,
        tooltip: {
          y: {
            formatter: (val) => `${val.toFixed(2)}%`,
          },
        },
        dataLabels: {
          formatter: (val: string | number | number[]) => {
            if (typeof val === 'number') {
              return `${val.toFixed(1)}%`;
            }
            return `${val}%`;
          },
        }
      };
    });

    this.candidatosService.getMediaIdadePorTipoSanguineo().subscribe((mediaIdadePorTipoSanguineoData) => {
      if (!mediaIdadePorTipoSanguineoData) return;
      const tipos = Object.keys(mediaIdadePorTipoSanguineoData); // ["A+", "AB+", ...]
      const valores = Object.values(mediaIdadePorTipoSanguineoData).map(v => parseFloat(v.toFixed(1))); // [47.6341, 58.5151, ...]

      this.chartOptionsMediaIdadePorTipoSanguineo = {
        series: [
          {
            name: 'Média de Idade',
            data: valores,
          },
        ],
        chart: {
          type: 'bar',
          height: 350
        },
        title: {
          text: 'Média de Idade por Tipo Sanguíneo',
          align: 'center'
        },
        xaxis: {
          categories: tipos,
          title: {
            text: 'Tipo Sanguíneo'
          }
        },
        yaxis: {
          title: {
            text: 'Idade (anos)'
          }
        },
        dataLabels: {
          formatter: (val: string | number | number[]) => {
            if (typeof val === 'number') {
              return `${val.toFixed(1)}%`;
            }
            return `${val}%`;
          },
        },
        tooltip: {
          y: {
            formatter: val => `${val.toFixed(1)} anos`
          }
        }
      };
    });

    this.candidatosService.getQuantidadePossiveisDoadores().subscribe((doadoresPorReceptorData) => {
      if (!doadoresPorReceptorData) return;
      const tipos = Object.keys(doadoresPorReceptorData); // ["A+", "A-", ...]
      const quantidades = Object.values(doadoresPorReceptorData); // [113, 208, ...]

      this.chartOptionsDoadoresPorReceptor = {
        series: [
          {
            name: 'Doadores',
            data: quantidades,
          },
        ],
        chart: {
          type: 'bar',
          height: 350
        },
        title: {
          text: 'Doadores Possíveis por Tipo Sanguíneo Receptor',
          align: 'center'
        },
        xaxis: {
          categories: tipos,
          title: {
            text: 'Tipo Sanguíneo Receptor'
          }
        },
        yaxis: {
          title: {
            text: 'Quantidade de Doadores'
          }
        },
        dataLabels: {
          enabled: true
        },
        tooltip: {
          y: {
            formatter: val => `${val} doadores`
          }
        }
      };
    });
  }
}
