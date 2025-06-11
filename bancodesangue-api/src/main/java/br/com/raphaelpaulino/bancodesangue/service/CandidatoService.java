package br.com.raphaelpaulino.bancodesangue.service;

import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import br.com.raphaelpaulino.bancodesangue.domain.model.Candidato;
import br.com.raphaelpaulino.bancodesangue.dto.CandidatoDto;
import br.com.raphaelpaulino.bancodesangue.dto.ResultadoDto;

@Service
public class CandidatoService {

	public ResultadoDto processar(List<CandidatoDto> candidatos) {
		ResultadoDto resultado = new ResultadoDto();
		resultado.setCandidatosPorEstado(contarPorEstado(candidatos));
		resultado.setImcMedioPorFaixaEtaria(imcPorFaixa(candidatos));
		
		return resultado;
	}

	private Map<String, Long> contarPorEstado(List<CandidatoDto> candidatos) {
		return candidatos.stream()
				.collect(Collectors.groupingBy(CandidatoDto::getEstado, Collectors.counting()));
	}
	

	private Map<String, Double> imcPorFaixa(List<CandidatoDto> candidatos) {
		Map<String, List<Double>> imcsPorFaixa = new HashMap<>();

		for (CandidatoDto c : candidatos) {			
			int idade = Period.between(c.getDataNasc(), LocalDate.now()).getYears();
			String faixa = ((idade / 10) * 10) + "-" + (((idade / 10) * 10) + 9);

			double imc = c.getPeso() / (c.getAltura() * c.getAltura());
			imcsPorFaixa
				.computeIfAbsent(faixa, k -> new ArrayList<>())
				.add(imc);
		}

		Map<String, Double> medias = new TreeMap<>();
		for (Map.Entry<String, List<Double>> e : imcsPorFaixa.entrySet()) {

	        double media = e.getValue()
				.stream()
				.mapToDouble(Double::doubleValue)
				.average()
				.orElse(0.0);

	            medias.put(e.getKey(), Math.round(media * 100.0) / 100.0); // arredondar para 2 casas
		}
		return medias;
	}
}
