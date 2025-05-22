describe('Gerenciamento de perfis no Github', () => {
     beforeEach(() => {
    cy.login()
    cy.goTo('Tabela', 'Perfis do GitHub') 
    })
    it('Deve poder cadastrar um novo perfil do github', () => {
        cy.log('TODO')
        cy.get('#name').type('Fernando Papito')
        cy.get('#username').type('papitodev')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()
        
        cy.contains('table tbody tr', 'Fernando Papito').should('be.visible')
        cy.contains('table tbody tr', 'papitodev').should('be.visible')
        cy.contains('table tbody tr', 'QA').should('be.visible')

        cy.contains('table tbody tr', 'Fernando Papito').should('be.visible')
        cy.contains('table tbody tr', 'papitodev').should('be.visible')
        cy.contains('table tbody tr', 'QA').should('be.visible')
    });
});