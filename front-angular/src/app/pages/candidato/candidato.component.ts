import { Component } from '@angular/core';
import {
  Candidato,
  CandidatosService,
} from '../../services/candidatos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidato.component.html',
  styleUrl: './candidato.component.scss',
})
export class CandidatoComponent {
  candidatos: Candidato[] = [];

  constructor(private candidatosService: CandidatosService) {}

  ngOnInit(): void {
    this.candidatosService.getTodos().subscribe((data) => {
      this.candidatos = data;
    });
  }
}
