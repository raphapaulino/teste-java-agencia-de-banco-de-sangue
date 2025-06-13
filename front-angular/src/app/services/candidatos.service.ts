import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CandidatosService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getDistribuicaoPorEstado(): Observable<{ candidatosPorEstado: { [faixa: string]: number } }> {
    return this.http.get<{ candidatosPorEstado: { [estado: string]: number } }>(
      `${this.apiUrl}/api/candidatos/estatisticas-para-os-graficos`
    );
  }

  getImcPorFaixa(): Observable<{ imcMedioPorFaixaEtaria: { [faixa: string]: number } }> {
    return this.http.get<{ imcMedioPorFaixaEtaria: { [faixa: string]: number } }>(
      `${this.apiUrl}/api/candidatos/estatisticas-para-os-graficos`
    );
  }

  percentualObesidade(): Observable<{ percentualObesosPorSexo: { [faixa: string]: number } }> {
    return this.http.get<{ percentualObesosPorSexo: { [faixa: string]: number } }>(
      `${this.apiUrl}/api/candidatos/estatisticas-para-os-graficos`
    );
  }
}
