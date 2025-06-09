package br.com.raphaelpaulino.bancodesangue.jpa;

import java.util.List;

import org.springframework.stereotype.Component;

import br.com.raphaelpaulino.bancodesangue.domain.model.Candidato;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Component
public class CadastroCandidato {

	@PersistenceContext
	private EntityManager manager;
	
	public List<Candidato> listar() {
		return manager.createQuery("from Candidato", Candidato.class)
				.getResultList();
	}
}
