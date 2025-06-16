# Projeto Java - Agência de Banco de Sangue (MVP)

## Instalação

#### Pré-requisitos:

- Git
- Java 17
- Banco de Dados MySQL 8.* sendo executado na porta 3306
- Node JS 18.20 ou superior
- Servidor Web (Http Server ou Apache)

<br>

1. Abra o terminal, escolha um local/diretório em sua máquina e clone o projeto nele: 

```
// Via HTTPS
cd /seu/diretorio/de/instalacao/
git clone https://github.com/raphapaulino/teste-java-agencia-de-banco-de-sangue.git
```
**Ou**

```
// Via SSH
cd /seu/diretorio/de/instalacao/
git@github.com:raphapaulino/teste-java-agencia-de-banco-de-sangue.git
```

2. Ainda pelo terminal, ao finalizar o download dos arquivos, acesse o diretório do projeto:

```
cd /seu/diretorio/de/instalacao/teste-java-agencia-de-banco-de-sangue
```

3. Em seguida, acesse o projeto que contém a API `bancodesangue-api`, porém no diretório `resources` dentro dela:

```
cd /seu/diretorio/de/instalacao/teste-java-agencia-de-banco-de-sangue/bancodesangue-api/src/main/resources
```

4. Renomeie o arquivo `application-development-template.properties` para `application-development.properties`

```
mv /seu/diretorio/de/instalacao/teste-java-agencia-de-banco-de-sangue/bancodesangue-api/src/main/resources/application-development-template.properties /seu/diretorio/de/instalacao/teste-java-agencia-de-banco-de-sangue/bancodesangue-api/src/main/resources/application-development.properties
```

5. Abra o novo arquivo que renomeou no seu editor preferido, informe `usuário` e `senha` do seu banco de dados MySQL.

6. Em seguida, volte ao diretório raiz da API:

```
cd ../../../
```

7. Certifique-se de que esteja no diretório `/seu/diretorio/de/instalacao/teste-java-agencia-de-banco-de-sangue/bancodesangue-api` e utilize o programa `mvnw` (Maven Wrapper) que irá:

- Compilar o código-fonte (compile)
- Executar os testes (test)
- Empacotar o projeto como um .jar (package)
- Instalar o programa gerado no repositório local do Maven (~/.m2/repository)

  Comando:

```
./mvnw install
```

8. Por fim, acesse o diretório `target` e execute o .jar gerado para que a API fique apta a receber requisições na porta 8080:

```
cd target/
```
```
java -jar bancodesangue-api-0.0.1-SNAPSHOT.jar --port=8080
```
### Executando os projetos frontend

#### Bootstrap

A fim de simplificar a execução do projeto `front-bootstrap` podemos:

1. Instalar e subir o servidor web `http-server` caso não tenha o `Apache` instalado na sua máquina. Para instalá-lo de forma global, via terminal execute de qualquer lugar da sua máquina:

```
npm install http-server -g
```

2. Ainda pelo terminal, acesse o diretório raiz do projeto bootstrap:

```
cd /seu/diretorio/de/instalacao/teste-java-agencia-de-banco-de-sangue/front-bootstrap
```

3. Logo em seguida, suba o `http-server` na porta 8000:

```
http-server -p 8000
```

3. Por fim, abra em seu navegador preferido o endereço a seguir:

```
http://localhost:8000
```

Enjoy! ;D

<br>

#### Angular

**Dica:** As instruções a seguir não implicam em ter que parar o `http-server`.

1. Em uma outra seção de terminal, acesse o diretório raiz do projeto `angular`:

```
cd /seu/diretorio/de/instalacao/teste-java-agencia-de-banco-de-sangue/front-angular
```

2. Instale as dependências do projeto:

```
npm install
```

3. Execute o comando abaixo que irá gerar o bundle do projeto e subir o servidor web embutido nele na porta 4200:

```
http://localhost:4200
```

4. Por fim, abra em seu navegador preferido o endereço a seguir:

```
http://localhost:8000
```

Enjoy too! ;D

<br>

## Informações Adicionais do Projeto

#### Informações sobre segurança relativas a Cross-Site Scripting

Construí esse projeto de tal forma que o backend só responderá se requisições partirem de 2 possíveis endereços:

```
// frontend com Bootstrap e Javascript (diretório front-bootstrap)
http://localhost:8000
```
```
// frontend com Bootstrap e Angular (diretório front-angular)
http://localhost:4200
```

> **IMPORTANTE:** Construí primeiro com Javascript puro e Bootstrap o MVP para ser mais rápido e prático. MVP pronto, parti para o Angular.

<br>

#### Ambiente de Desenvolvimento

Apesar de este projeto ser para avaliação de teste de desenvolvimento Java, por boas práticas, organizei `arquivos de profile` distintos para cada ambiente: **desenvolvimento** e **produção**.

Para o ambiente de desenvolvimento utilizar o arquivo `application-development-template.properties` renomeando-o para `application-development.properties` que trabalhará em conjunto com as configurações do arquivo base `application.properties`.

Adicionei 2 configurações Spring Boot utilizadas pelo Hibernate  para gerar automaticamente o DDL e validar o SCHEMA do banco de dados com base nos mapeamentos de entidades do projeto sempre que a aplicação for iniciada ou reiniciada, são elas:

```
spring.jpa.generate-ddl=true
spring.jpa.hibernate.ddl-auto=create
```
<br>

#### Ambiente de Produção

Utilizar o arquivo `application-production-template.properties` renomeando-o para `application-production.properties` que trabalhará em conjunto com as configurações do arquivo base `application.properties`. 

<br>

#### Banco de Dados

Para o ambiente de desenvolvimento, o Hibernate irá checar se já existe o banco de dados de nome `banco_de_sangue`, se não existir ele irá criar automaticamente para nós juntamente com a tabela `candidatos` devido ao mapeamento da entidade `Candidato.java` explicado anteriormente.

Para visualização das queries em tempo de execução, adicionei a configuração `spring.jpa.show-sql=true` no arquivo de profile de desenvolvimento.


### Links úteis:

- [Download do Java](https://jdk.java.net/archive)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Git](https://git-scm.com)
- [Node JS](https://nodejs.org/en)
- [NPM http-server](https://www.npmjs.com/package/http-server)
- [Bootstrap](https://getbootstrap.com)
- [Angular](https://v17.angular.io/docs)
- [MySQL](https://www.mysql.com)
