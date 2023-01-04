describe('check library', () => {
    beforeEach(() => {
        cy.visit('/?path=/story/toasts--toasts');
    });
    it('should visit', () => {
        cy.visit('iframe.html?viewMode=story&id=toasts--toasts');
        cy.get('#buttonSubmit')
    })
    it('should have success color, title and description', () => {
        cy.visit('iframe.html?viewMode=story&id=toasts--toasts');
        const color = 'rgb(34, 139, 34)'
        cy.get('#toastType').select('Success')
        cy.get('#toastTitle').type('Success title')
        cy.get('#toastDescription').type('Success description')
        cy.get('#buttonSubmit').click()
        cy.get('#toastWrapper').should('have.css', 'background-color', color)
        cy.get('#toastWrapper').contains('Success title')
        cy.get('#toastWrapper').contains('Success description')
    })
    it('should have warning color, title and description', () => {
        cy.visit('iframe.html?viewMode=story&id=toasts--toasts');
        const color = 'rgb(255, 99, 71)'
        cy.get('#toastType').select('Warning')
        cy.get('#toastTitle').type('Warning title')
        cy.get('#toastDescription').type('Warning description')
        cy.get('#buttonSubmit').click()
        cy.get('#toastWrapper').should('have.css', 'background-color', color)
        cy.get('#toastWrapper').contains('Warning title')
        cy.get('#toastWrapper').contains('Warning description')
    })
    it('should have error color, title and description', () => {
        cy.visit('iframe.html?viewMode=story&id=toasts--toasts');
        const color = 'rgb(178, 34, 34)'
        cy.get('#toastType').select('Error')
        cy.get('#toastTitle').type('Error title')
        cy.get('#toastDescription').type('Error description')
        cy.get('#buttonSubmit').click()
        cy.get('#toastWrapper').should('have.css', 'background-color', color)
        cy.get('#toastWrapper').contains('Error title')
        cy.get('#toastWrapper').contains('Error description')
    })
    it('should disappear after 5 seconds', () => {
        cy.visit('iframe.html?viewMode=story&id=toasts--toasts');
        cy.get('#buttonSubmit').click()
        cy.get('#toastWrapper').should('be.exist')
        cy.wait(5000)
        cy.get('#toastWrapper').should('not.be.exist')
    })
    it('should have correct margin', () => {
        const margin = 20
        cy.visit('iframe.html?viewMode=story&id=toasts--toasts');
        cy.get('#buttonSubmit').click()
        cy.get('#toastWrapper').should('have.css', 'margin-top', `${margin}px`)
    })
    it('should have correct position', () => {
        const position = 48.3906
        cy.visit('iframe.html?viewMode=story&id=toasts--toasts');
        cy.get('#buttonSubmit').click()
        cy.get('#toastWrapper').should('have.css', 'left', `${position}px`)
    })
})