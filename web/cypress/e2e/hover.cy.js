describe('Simulando Mouseover', () => {
    it('Deve mostrar um texto ao passa o mouse por cima do link do instagram', () => {
        cy.login()
        cy.contains('Isso é Mouseover!').should('not.exist')
        cy.get('[data-cy="instagram-link"]').realHover()
        cy.contains('Isso é Mouseover!').should('exist')
    });
});