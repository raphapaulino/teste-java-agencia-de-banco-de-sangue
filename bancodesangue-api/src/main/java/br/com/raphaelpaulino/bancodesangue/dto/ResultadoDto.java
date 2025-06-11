package br.com.raphaelpaulino.bancodesangue.dto;

import java.util.Map;

public class ResultadoDto {
	private Map<String, Long> candidatosPorEstado;
	
	private Map<String, Double> imcMedioPorFaixaEtaria;

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
}
