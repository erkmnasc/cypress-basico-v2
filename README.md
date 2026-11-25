# cypress-basico-v2

[![End-to-end tests](https://github.com/erkmnasc/cypress-basico-v2/actions/workflows/ci.yml/badge.svg)](https://github.com/erkmnasc/cypress-basico-v2/actions/workflows/ci.yml)

Meu projeto do curso **Cypress Básico** da Escola Talking About Testing
(fork do repositório do curso). Os testes estão em `cypress/e2e/`: 19
cenários do formulário da Central de Atendimento ao Cliente TAT (campos
obrigatórios, validações, selects, radios, checkboxes, upload de arquivo e
links), rodando em viewport desktop e mobile no GitHub Actions.

Atualizado para o Cypress 15 (`cypress.config.js`).

---
Sample project for the basic course of the Talking About Testing online school.

## Pre-requisites

You need to have Node.js and npm installed to run this project.

> I used versions `v22.4.1` and `10.8.2` of Node.js and npm, respectively. I suggest you use the same version or a more recent one.

## Installation

Run `npm install` (or `npm i` for the short version) to install the development dependencies.

## Tests

You can run the tests simulating a desktop or mobile viewport.

### Desktop

Run `npm test` (or `npm t` for the short version) to run the tests in headless mode on a desktop viewport.

Or, run `npm run cy:open` to open Cypress in interactive mode on a desktop viewport.

### Mobile

Run `npm run test:mobile` to run the tests in headless mode on a mobile viewport.

Or, run `npm run cy:open:mobile` to open Cypress in interactive mode on a mobile viewport.

## Support this project

If you want to support this project, leave a ⭐.

___

This project was created with 💚 by [Erick Nascimento](https://www.linkedin.com/in/erick-nascimento).
