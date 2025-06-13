package br.com.raphaelpaulino.bancodesangue.jpa;

import java.util.List;

import org.springframework.boot.WebApplicationType;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ApplicationContext;

import br.com.raphaelpaulino.bancodesangue.BancodesangueApiApplication;
import br.com.raphaelpaulino.bancodesangue.domain.model.Candidato;

public class ConsultaCandidatoMain {

	public static void main(String[] args) {
		ApplicationContext applicationContext = new SpringApplicationBuilder(BancodesangueApiApplication.class)
				.web(WebApplicationType.NONE)
				.run(args);
		
		CadastroCandidato cadastroCandidato = applicationContext.getBean(CadastroCandidato.class);
		
		List<Candidato> candidatos = cadastroCandidato.listar();
		
		for (Candidato candidato : candidatos) {
			System.out.println(candidato.getNome());
		}
	}
}
