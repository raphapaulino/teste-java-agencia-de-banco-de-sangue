package br.com.raphaelpaulino.bancodesangue.dto;

import java.util.Map;

public class ResultadoDto {
	private Map<String, Long> candidatosPorEstado;

	public Map<String, Long> getCandidatosPorEstado() {
		return candidatosPorEstado;
	}

	public void setCandidatosPorEstado(Map<String, Long> candidatosPorEstado) {
		this.candidatosPorEstado = candidatosPorEstado;
	}
}
