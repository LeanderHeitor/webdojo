describe('Tocar o iframe', () => {
    it('Deve poder tocar o iframe de exemplo', () => {
        cy.login()
        cy.goTo('Video', 'Video')
        cy.wait(3000)// Espera o iframe carregar
        cy.get('iframe[title="Video Player"]')
            .should('exist')
            .its('0.contentDocument.body')
            .then(cy.wrap)
            .as('iFramePlayer')
        cy.get('@iFramePlayer')
            
            .find('.play-button')
            .click()
        cy.get('@iFramePlayer')
            .find('.pause-button')
    });
});