
describe('Login in OrangeHRM and check page title', () => {
  it('Search for shoes', () => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  
    cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


    
  })


  it('Search for shoes', () => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


  cy.get('.orangehrm-login-branding > img').should('be.visible')
  .and('exist')

  
    
  })

})


