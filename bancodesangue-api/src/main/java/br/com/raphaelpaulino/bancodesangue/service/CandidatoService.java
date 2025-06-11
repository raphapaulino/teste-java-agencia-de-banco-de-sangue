package br.com.raphaelpaulino.bancodesangue.service;

import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import br.com.raphaelpaulino.bancodesangue.domain.model.Candidato;
import br.com.raphaelpaulino.bancodesangue.dto.CandidatoDto;
import br.com.raphaelpaulino.bancodesangue.dto.ResultadoDto;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Service
public class CandidatoService {
	
	@PersistenceContext
	private EntityManager manager;
	
	public ResultadoDto processar(List<CandidatoDto> candidatos) {
		ResultadoDto resultado = new ResultadoDto();
		resultado.setCandidatosPorEstado(contarPorEstado(candidatos));
		resultado.setImcMedioPorFaixaEtaria(imcPorFaixa(candidatos));
		resultado.setPercentualObesosPorSexo(percentualObesidade(candidatos));
		resultado.setMediaIdadePorTipoSanguineo(mediaIdadePorTipo(candidatos));
		resultado.setDoadoresPorReceptor(doadoresCompativeis(candidatos));
		
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
	        imcsPorFaixa.computeIfAbsent(faixa, k -> new ArrayList<>()).add(imc);
	    }

	    Map<String, Double> medias = new TreeMap<>();
	    for (Map.Entry<String, List<Double>> e : imcsPorFaixa.entrySet()) {
	        double media = e.getValue().stream().mapToDouble(Double::doubleValue).average().orElse(0.0);
	        medias.put(e.getKey(), Math.round(media * 100.0) / 100.0);
	    }
	    return medias;
	}

	private Map<String, Double> percentualObesidade(List<CandidatoDto> candidatos) {
		Map<String, List<Double>> imcsPorSexo = new HashMap<>();
	
		for (CandidatoDto c : candidatos) {
			double imc = c.getPeso() / (c.getAltura() * c.getAltura());
			imcsPorSexo.computeIfAbsent(c.getSexo(), k -> new ArrayList<>()).add(imc);
		}
	
		Map<String, Double> percentuais = new HashMap<>();
		for (Map.Entry<String, List<Double>> e : imcsPorSexo.entrySet()) {
			List<Double> imcs = e.getValue();
			long obesos = imcs.stream().filter(imc -> imc > 30).count();
			percentuais.put(e.getKey(), (obesos * 100.0) / imcs.size());
		}
		return percentuais;
	}
	
	private Map<String, Double> mediaIdadePorTipo(List<CandidatoDto> candidatos) {
		Map<String, List<Integer>> idadesPorTipo = new HashMap<>();
	
		for (CandidatoDto c : candidatos) {
			int idade = Period.between(c.getDataNasc(), LocalDate.now()).getYears();
			idadesPorTipo.computeIfAbsent(c.getTipoSanguineo(), k -> new ArrayList<>()).add(idade);
		}
	
		Map<String, Double> medias = new TreeMap<>();
		for (Map.Entry<String, List<Integer>> e : idadesPorTipo.entrySet()) {
			medias.put(e.getKey(), e.getValue().stream().mapToInt(Integer::intValue).average().orElse(0.0));
		}
		return medias;
	}
	
	private Map<String, Integer> doadoresCompativeis(List<CandidatoDto> candidatos) {
		// Mapa de compatibilidade
		Map<String, Set<String>> compatibilidade = new HashMap<>();
		compatibilidade.put("A+", Set.of("A+", "AB+"));
		compatibilidade.put("A-", Set.of("A+", "A-", "AB+", "AB-"));
		compatibilidade.put("B+", Set.of("B+", "AB+"));
		compatibilidade.put("B-", Set.of("B+", "B-", "AB+", "AB-"));
		compatibilidade.put("AB+", Set.of("AB+"));
		compatibilidade.put("AB-", Set.of("AB+", "AB-"));
		compatibilidade.put("O+", Set.of("A+", "B+", "O+", "AB+"));
		compatibilidade.put("O-", Set.of("A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"));
	
		Map<String, Integer> resultado = new TreeMap<>();
	
		for (String receptor : compatibilidade.values().stream().flatMap(Set::stream).collect(Collectors.toSet())) {
			int count = 0;
			for (CandidatoDto doador : candidatos) {
				int idade = Period.between(doador.getDataNasc(), LocalDate.now()).getYears();
				if (idade < 16 || idade > 69 || doador.getPeso() <= 50) continue; // deve estar apto para doação
	
				String tipo = doador.getTipoSanguineo();
				if (compatibilidade.containsKey(tipo) && compatibilidade.get(tipo).contains(receptor)) {
					count++;
				}
			}
			resultado.put(receptor, count);
		}
		return resultado;
	}
	
	public List<Candidato> buscarTodos() {
		return manager.createQuery("from Candidato", Candidato.class)
				.getResultList();
	}
}
