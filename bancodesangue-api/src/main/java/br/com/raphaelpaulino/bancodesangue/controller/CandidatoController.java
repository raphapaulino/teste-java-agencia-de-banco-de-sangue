package br.com.raphaelpaulino.bancodesangue.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.raphaelpaulino.bancodesangue.domain.model.Candidato;
import br.com.raphaelpaulino.bancodesangue.dto.CandidatoDto;
import br.com.raphaelpaulino.bancodesangue.dto.ResultadoDto;
import br.com.raphaelpaulino.bancodesangue.dto.ResultadoGraficosDto;
import br.com.raphaelpaulino.bancodesangue.service.CandidatoService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/candidatos")
public class CandidatoController {

    @Autowired
    private CandidatoService service;

    @PostMapping("/processar")
    @ResponseStatus(HttpStatus.CREATED)
    public ResultadoDto processar(@RequestBody @Valid List<@Valid CandidatoDto> candidatos) {
        return service.processar(candidatos);
    }

    @GetMapping("/imc-por-candidato")
    @ResponseStatus(HttpStatus.CREATED)
    public ResultadoGraficosDto processarGraficos() {
        return service.buscarTodos();
    }

}
