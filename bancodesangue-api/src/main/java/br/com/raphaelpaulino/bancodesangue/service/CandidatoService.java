package br.com.raphaelpaulino.bancodesangue.service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import br.com.raphaelpaulino.bancodesangue.domain.model.Candidato;
import br.com.raphaelpaulino.bancodesangue.dto.ResultadoDto;

@Service
public class CandidatoService {

	public ResultadoDto processar(List<Candidato> candidatos) {
		ResultadoDto resultado = new ResultadoDto();
		resultado.setCandidatosPorEstado(contarPorEstado(candidatos));
		return resultado;
	}

	private Map<String, Long> contarPorEstado(List<Candidato> candidatos) {
		return candidatos.stream()
				.collect(Collectors.groupingBy(Candidato::getEstado, Collectors.counting()));
	}
}
