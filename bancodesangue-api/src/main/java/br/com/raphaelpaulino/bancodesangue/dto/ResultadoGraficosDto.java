package br.com.raphaelpaulino.bancodesangue.dto;

import java.util.Map;

public class ResultadoGraficosDto {
	private Map<String, Double> imcMedioPorFaixaEtaria;

	public Map<String, Double> getImcMedioPorFaixaEtaria() {
		return imcMedioPorFaixaEtaria;
	}

	public void setImcMedioPorFaixaEtaria(Map<String, Double> imcMedioPorFaixaEtaria) {
		this.imcMedioPorFaixaEtaria = imcMedioPorFaixaEtaria;
	}
}
