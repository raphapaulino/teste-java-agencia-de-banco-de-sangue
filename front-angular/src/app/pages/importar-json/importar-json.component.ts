import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-importar-json',
  imports: [CommonModule, FormsModule],
  templateUrl: './importar-json.component.html',
  styleUrl: './importar-json.component.scss'
})
export class ImportarJsonComponent {
  dadosImportados: any[] = [];

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
}
