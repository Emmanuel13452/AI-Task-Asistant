/// <reference types="Cypress" />
describe('Prueba_de_automatizacion', () => {

  beforeEach(() => {
    cy.visit('https://ai-task-assistant-cl-v2.onrender.com/')
  })

  it('Validando_campo_email', () => {
    cy.get('#auth-email').should('be.enabled')
  })

  it('Validando_campo_contraseña', () => {
    cy.get('#auth-password').should('be.enabled')
  })

  it('Login exitoso', () => {
    cy.get('#auth-email').type('Kiritoemmanuelaf@gmail.com')
    cy.get('#auth-password').type('emmalful06092008')
    cy.get('[data-cy="auth-submit"]').click();

    // Verificación: ajusta según lo que pase al entrar
    cy.url().should('not.include', 'login')
  })
})