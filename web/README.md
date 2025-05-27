
# 📘 Documentação de Testes Automatizados - WebDojo

Este projeto contém os testes automatizados da aplicação **WebDojo**, utilizando o framework **Cypress**.

---

## 📁 Estrutura do Projeto

A estrutura da pasta `cypress` está organizada da seguinte forma:

```
cypress/
│
├── e2e/                       # Testes end-to-end
│
├── fixtures/                 # Arquivos simulados (mockados) para uso nos testes
│   ├── 1.pdf                 # Exemplo de fixture em PDF
│   ├── cep.json              # Dados de exemplo para testes com CEP
│   └── consultancy.json      # Dados de consultoria
│
├── support/                  # Arquivos de suporte e comandos customizados
│   ├── actions/              # Ações reutilizáveis
│   │   ├── consultancy.actions.js
│   ├── commands.js           # Comandos customizados do Cypress
│   ├── e2e.js                # Setup global de testes
│   └── utils.js              # Utilitários compartilhados
```

---

## ▶️ Executando a Aplicação WebDojo

Antes de executar os testes, é necessário iniciar a aplicação WebDojo. A aplicação está localizada no mesmo repositório e pode ser iniciada com o seguinte comando:

```bash
npm run dev
```

---

## 🧪 Executando os Testes

O projeto contém diversos scripts para facilitar a execução dos testes. Abaixo estão as opções disponíveis:

### Testes E2E padrão

Executa todos os testes E2E com visualização de tela configurada:

```bash
npm run test
```

### Interface interativa do Cypress (modo gráfico)

Abre o Cypress em modo interativo:

```bash
npm run test:ui
```

### Teste específico: login (modo desktop)

Executa apenas o teste de login com visualização padrão de desktop:

```bash
npm run test:login
```

### Teste específico: login (modo mobile)

Executa o teste de login com dimensões típicas de um dispositivo móvel:

```bash
npm run test:login:mobile
```

---

## 🛠️ Requisitos

Certifique-se de que você tenha os seguintes pré-requisitos instalados:

- [Node.js](https://nodejs.org/) (versão compatível com o Cypress)
- [npm](https://www.npmjs.com/)
- Cypress (`npx cypress` será utilizado nos scripts)

---

## 📌 Observações

- O projeto utiliza a resolução `1440x900` como padrão para testes desktop.
- Para simulação de dispositivos móveis, usa-se a resolução `414x896`.
- O Cypress é executado diretamente com `npx`, não exigindo instalação global.

---

## 📄 Licença

Este projeto é mantido como parte do repositório da aplicação **WebDojo**. Uso interno e educacional.
