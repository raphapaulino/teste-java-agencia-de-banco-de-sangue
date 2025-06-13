export interface EstatisticasCandidatos {
  candidatosPorEstado: { [estado: string]: number };
  imcMedioPorFaixaEtaria: { [faixa: string]: number };
  percentualObesosPorSexo: { [sexo: string]: number };
  mediaIdadePorTipoSanguineo: { [tipo: string]: number };
  doadoresPorReceptor: { [tipo: string]: number };
}
