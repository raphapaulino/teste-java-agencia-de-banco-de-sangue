package br.com.raphaelpaulino.bancodesangue.dto;

import java.util.Map;

public class ResultadoDto {
	private Map<String, Long> candidatosPorEstado;

	private Map<String, Double> imcMedioPorFaixaEtaria;

	private Map<String, Double> percentualObesosPorSexo;

	private Map<String, Double> mediaIdadePorTipoSanguineo;

	private Map<String, Integer> doadoresPorReceptor;

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

	public Map<String, Double> getMediaIdadePorTipoSanguineo() {
		return mediaIdadePorTipoSanguineo;
	}

	public void setMediaIdadePorTipoSanguineo(Map<String, Double> mediaIdadePorTipoSanguineo) {
		this.mediaIdadePorTipoSanguineo = mediaIdadePorTipoSanguineo;
	}

	public Map<String, Integer> getDoadoresPorReceptor() {
		return doadoresPorReceptor;
	}

	public void setDoadoresPorReceptor(Map<String, Integer> doadoresPorReceptor) {
		this.doadoresPorReceptor = doadoresPorReceptor;
	}
}
