package br.com.raphaelpaulino.bancodesangue.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.raphaelpaulino.bancodesangue.domain.model.Candidato;

public interface CandidatoRepository extends JpaRepository<Candidato, Long> {
}
