# API de Validação de CPF e CNPJ

## Descrição

Esta API permite validar números de CPF (Cadastro de Pessoa Física), utilizando uma rota simples que aceita o CPF como parâmetro na URL. Ela verifica se o CPF ou CNPJ fornecido é válido de acordo com as regras básicas de formatação.

## Recursos

- **TypeScript**: Linguagem em que foi desenvolvida
- **Framework**: Desenvolvida com Node.js e Express.js.
- **Validação de CPF e CNPJ**: Verifica a conformidade do CPF com base na estrutura numérica.
- **Estrutura modular**: Utiliza controladores para separar a lógica de negócios e as rotas.

## Como usar a API

### Rota

`GET https://cpfvalidator-production.up.railway.app/api/validate-cpf?cpf=`

`GET https://cpfvalidator-production.up.railway.app/api/validate-cnpj?cnpj=:`

#### Query

- `cpf`: Um número de CPF no formato de 11 dígitos.
- `cnpj`: Um número de CNPJ no formato de 14 dígitos.

#### Respostas

- **CPF válido**:

  - **Status**: 200 OK
  - **Exemplo**:

  ```json
  {
  	"message": "CPF | CNPJ válido"
  }
  ```

- **CPF inválido**:

- **Status**: 400 Bad Request

  - **Exemplo**:

  ```json
  {
  	"message": "CPF | CNPJ válido"
  }
  ```

## Como executar localmente

Clone o repositório:
Copiar código

```bash
git clone https://github.com/seu-usuario/cpf-validator-api.git
```

```bash
cd cpf-validator-api
```

## Instale as dependências:

Copiar código

```bash
npm install
```

Inicie o servidor:

Copiar código

```bash
npm run dev
```

Teste a API: Use ferramentas como Postman ou faça uma requisição no navegador:

http://localhost:3000/api/validate/12345678901

# Tecnologias Utilizadas

Node.js: Ambiente de execução JavaScript no servidor.
Express.js: Framework minimalista para aplicações web.
TypeScript: Tipagem estática para JavaScript, aumentando a produtividade e segurança.

## Como contribuir

Contribuições são bem-vindas! Siga os passos abaixo para participar do desenvolvimento:

Faça um fork do repositório.

Crie um branch para suas alterações:

bash
Copiar código

```bash
git checkout -b feature/minha-feature
```

Envie um pull request descrevendo suas mudanças.

## Sobre o desenvolvedor

Sou desenvolvedor de software apaixonado por criar soluções práticas e escaláveis. Busco sempre compartilhar conhecimento e inspirar outras pessoas na comunidade de tecnologia.

Se você gostou do projeto ou tem sugestões, fique à vontade para comentar, contribuir ou entrar em contato!
