describe('Kanban Board', () => {
    it('Deve mover uma tarefa de Todo para Done e atualizar o board', () => {
        cy.login()
        cy.goTo('Kanban', 'Kanban Board')
        const dataTransfer = new DataTransfer()
        cy.contains('div[draggable=true]', 'Documentar API')
            .trigger('dragstart', {dataTransfer})
            /*.parent()
            .parent()
            .parent()*/
        cy.get('.column-done')
            .trigger('drop' , {dataTransfer})
            .find('h3')
            .should('have.text', 'Done (4)')
        cy.get('.column-done')
            .and('include.text', 'Documentar API')
            .and('include.text', 'Criar documentação da API com Swagger')
    });
});