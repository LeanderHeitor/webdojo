describe('Validações de alerta em JavaScript', () => {
    beforeEach(() => {
        cy.login('')
        cy.goTo('Alertas', 'JavaScript Alerts');
    });
    it('Deve validar a mensagem de alerta', () => {
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Olá QA, eu sou um Alert Box!');
        });
        cy.contains('button', 'Mostrar Alert').click();
        
    });
    it('Deve confirmar e validar a resposta positiva', () => {
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!');
            return true; // Simula o click no botão "OK"
        });
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Você clicou em Ok!');
        });
        cy.contains('button', 'Mostrar Confirm').click();
    });
    it('Deve cancelar e validar a resposta negativa', () => {
        cy.log('Cancelando alerta');
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!');
            return false; // Simula o click no botão "OK"
        });
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Você cancelou!');
        });
        cy.contains('button', 'Mostrar Confirm').click();
    });
    it('Deve interagir com um prompt, inserir um texto e validar uma mensagem', () => {
        const promptAnswer ={
            name:'Fernando' 
        }
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(promptAnswer.name);
        });
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Olá Fernando! Boas-vindas ao WebDojo!');
        });
        cy.contains('button', 'Mostrar Prompt').click();
    });
});