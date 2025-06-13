import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { CandidatosService } from '../../services/candidatos.service';

@Component({
  selector: 'app-importar-json',
  imports: [CommonModule, FormsModule],
  templateUrl: './importar-json.component.html',
  styleUrl: './importar-json.component.scss'
})
export class ImportarJsonComponent {
  dadosImportados: any[] = [];
  status: string = '';

  constructor(private http: HttpClient, private candidatosService: CandidatosService) {}

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const json = JSON.parse(reader.result as string);
          console.log('JSON importado:', json);
          this.dadosImportados = Array.isArray(json) ? json : [json];
        } catch (error) {
          console.error('Erro ao ler o JSON:', error);
        }
      };
      reader.readAsText(file);
    }
  }

  importar() {
    this.status = 'Enviando dados...';
    this.http
      .post(`${environment.apiUrl}/api/candidatos/importar`, this.dadosImportados)
      .subscribe({
        next: () => {
          this.status = 'Importação realizada com sucesso!';

          this.candidatosService.recarregarEstatisticas();
        },
        error: (err) => {
          console.error('Erro na importação:', err);
          this.status = 'Erro ao importar os dados.';
        },
      });
  }
}
