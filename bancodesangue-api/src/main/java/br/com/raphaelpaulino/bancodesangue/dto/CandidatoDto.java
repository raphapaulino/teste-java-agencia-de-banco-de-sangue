package br.com.raphaelpaulino.bancodesangue.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import br.com.raphaelpaulino.bancodesangue.domain.model.Candidato;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;

public class CandidatoDto {

	private Integer id;
	
	private String nome;
	
	private String cpf;
	
	private String rg;
	
	@Past(message = "Data de nascimento deve ser uma data no passado")
	@NotNull(message = "Data de nascimento é obrigatória")
	@JsonFormat(pattern = "dd/MM/yyyy")
	@JsonProperty("data_nasc")
	private LocalDate dataNasc;
	
	private String sexo;
	
	private String mae;
	
	private String pai;
	
	private String email;
	
	private String cep;
	
	private String endereco;
	
	private Integer numero;
	
	private String bairro;
	
	private String cidade;
	
	private String estado;
	
	@JsonProperty("telefone_fixo")
	private String telefoneFixo;
	
	private String celular;
	
	private Double altura;
	
	private Double peso;

	@JsonProperty("tipo_sanguineo")
	private String tipoSanguineo;
	
	public CandidatoDto() {
	}
	
	public CandidatoDto(Candidato candidato) {
	    this.id = candidato.getId();
	    this.nome = candidato.getNome();
	    this.cpf = candidato.getCpf();
	    this.rg = candidato.getRg();
	    this.dataNasc = candidato.getDataNasc();
	    this.sexo = candidato.getSexo();
	    this.mae = candidato.getMae();
	    this.pai = candidato.getPai();
	    this.email = candidato.getEmail();
	    this.cep = candidato.getCep();
	    this.endereco = candidato.getEndereco();
	    this.numero = candidato.getNumero();
	    this.bairro = candidato.getBairro();
	    this.cidade = candidato.getCidade();
	    this.estado = candidato.getEstado();
	    this.telefoneFixo = candidato.getTelefoneFixo();
	    this.celular = candidato.getCelular();
	    this.altura = candidato.getAltura();
	    this.peso = candidato.getPeso();
	    this.tipoSanguineo = candidato.getTipoSanguineo();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getRg() {
		return rg;
	}

	public void setRg(String rg) {
		this.rg = rg;
	}

	public LocalDate getDataNasc() {
		return dataNasc;
	}

	public void setDataNasc(LocalDate dataNasc) {
		this.dataNasc = dataNasc;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public String getMae() {
		return mae;
	}

	public void setMae(String mae) {
		this.mae = mae;
	}

	public String getPai() {
		return pai;
	}

	public void setPai(String pai) {
		this.pai = pai;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public Integer getNumero() {
		return numero;
	}

	public void setNumero(Integer numero) {
		this.numero = numero;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getTelefoneFixo() {
		return telefoneFixo;
	}

	public void setTelefoneFixo(String telefoneFixo) {
		this.telefoneFixo = telefoneFixo;
	}

	public String getCelular() {
		return celular;
	}

	public void setCelular(String celular) {
		this.celular = celular;
	}

	public Double getAltura() {
		return altura;
	}

	public void setAltura(Double altura) {
		this.altura = altura;
	}

	public Double getPeso() {
		return peso;
	}

	public void setPeso(Double peso) {
		this.peso = peso;
	}

	public String getTipoSanguineo() {
		return tipoSanguineo;
	}

	public void setTipoSanguineo(String tipoSanguineo) {
		this.tipoSanguineo = tipoSanguineo;
	}
}
