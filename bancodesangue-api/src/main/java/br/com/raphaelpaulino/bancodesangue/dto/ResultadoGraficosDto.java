package br.com.raphaelpaulino.bancodesangue.dto;

import java.util.Map;

public class ResultadoGraficosDto {
	private Map<String, Long> candidatosPorEstado;
	
	private Map<String, Double> imcMedioPorFaixaEtaria;

	private Map<String, Double> percentualObesosPorSexo;
	
	public Map<String, Long> getCandidatosPorEstado() {
		return candidatosPorEstado;
	}

	public void setCandidatosPorEstado(Map<String, Long> candidatosPorEstado) {
		this.candidatosPorEstado = candidatosPorEstado;
	}
	
	public Map<String, Double> getImcMedioPorFaixaEtaria() {
		return imcMedioPorFaixaEtaria;
	}

	public void setImcMedioPorFaixaEtaria(Map<String, Double> imcMedioPorFaixaEtaria) {
		this.imcMedioPorFaixaEtaria = imcMedioPorFaixaEtaria;
	}

	public Map<String, Double> getPercentualObesosPorSexo() {
		return percentualObesosPorSexo;
	}

	public void setPercentualObesosPorSexo(Map<String, Double> percentualObesosPorSexo) {
		this.percentualObesosPorSexo = percentualObesosPorSexo;
	}
}
