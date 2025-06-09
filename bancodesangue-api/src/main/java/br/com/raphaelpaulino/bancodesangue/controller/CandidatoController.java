package br.com.raphaelpaulino.bancodesangue.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.raphaelpaulino.bancodesangue.domain.model.Candidato;
import br.com.raphaelpaulino.bancodesangue.dto.ResultadoDto;
import br.com.raphaelpaulino.bancodesangue.service.CandidatoService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/candidatos")
public class CandidatoController {

    @Autowired
    private CandidatoService service;

    @PostMapping("/processar")
    public ResultadoDto processar(@RequestBody List<Candidato> candidatos) {
        return service.processar(candidatos);
    }
}
