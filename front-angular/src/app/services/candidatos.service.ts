import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { environment } from '../../environments/environment';
import { EstatisticasCandidatos } from '../pages/dashboard/estatisticas-candidatos.model';

@Injectable({
  providedIn: 'root',
})
export class CandidatosService {
  private apiUrl = environment.apiUrl;

  private estatisticas$!: Observable<EstatisticasCandidatos>;

  constructor(private http: HttpClient) {}

  private loadEstatisticas(): Observable<EstatisticasCandidatos> {
    if (!this.estatisticas$) {
      this.estatisticas$ = this.http
        .get<EstatisticasCandidatos>(`${this.apiUrl}/api/candidatos/estatisticas-para-os-graficos`)
        .pipe(shareReplay(1)); // Reutiliza a última emissão
    }
    return this.estatisticas$;
  }

  getDistribuicaoPorEstado(): Observable<Record<string, number>> {
    return this.loadEstatisticas().pipe(map(d => d.candidatosPorEstado));
  }

  getImcPorFaixa() {
    return this.loadEstatisticas().pipe(map(d => d.imcMedioPorFaixaEtaria));
  }

  percentualObesidade() {
    return this.loadEstatisticas().pipe(map(d => d.percentualObesosPorSexo));
  }

  getMediaIdadePorTipoSanguineo() {
    return this.loadEstatisticas().pipe(map(d => d.mediaIdadePorTipoSanguineo));
  }

  getQuantidadePossiveisDoadores() {
    return this.loadEstatisticas().pipe(map(d => d.doadoresPorReceptor));
  }

  // 🔄 Força recarregar estatísticas
  // recarregarEstatisticas() {
  //   this.estatisticas$ = undefined as any;
  // }
}
