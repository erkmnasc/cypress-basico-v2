Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').should('be.visible').type('Erick').should('have.value', 'Erick')
    cy.get('#lastName').should('be.visible').type('Testando Teste').should('have.value', 'Testando Teste')
    cy.get('#email').should('be.visible').type('teste@teste.com.br').should('have.value', 'teste@teste.com.br')
    cy.get('#phone').should('be.visible').type('11999999999').should('have.value', '11999999999')
    cy.get('#product').select('Blog').should('have.value', 'blog')
    cy.get('#support-type > :nth-child(4)').click()
    cy.get('#email-checkbox').check()
    cy.get('#open-text-area').type('Testando a aplicação do CAC TAT. Testando a aplicação do CAC TAT. Testando a aplicação do CAC TAT.', {delay: 0})
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json')
    cy.contains('.button', 'Enviar').click()
    cy.get('.success').should('be.visible')
})