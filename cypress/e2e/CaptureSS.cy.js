
describe('Capture Screenshot or Videos', () => {
    it('Capture data', () => {
      // Visit the login page
      cy.visit('https://www.daraz.com.bd/')

      cy.screenshot("homepage")
      
      cy.wait(10000)
  
      cy.get(".lzd-logo-content").screenshot("Logo")
 
 
      
    })

    it('Capture data for fail case', () => {
        // Visit the login page
        cy.visit('https://www.daraz.com.bd/')
  
        cy.xpath("//a[normalize-space()='Login']").click()
        cy.xpath("//a[normalize-space()='Login']").should("have.text", "Sign Up")

})

})