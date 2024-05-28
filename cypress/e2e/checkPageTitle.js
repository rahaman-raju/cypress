
describe('Login in OrangeHRM and check page title', () => {
  it('Page Title', () => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  
    cy.url().should('include', 'OrangeHRM')

  
    
    
  })
})






