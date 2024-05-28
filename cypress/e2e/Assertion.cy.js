
describe('Assertion', () => {
    it('Implicit Assertion', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
    
      cy.xpath("//input[@placeholder='Username']").type("Admin")
      cy.xpath("//input[@placeholder='Password']").type("admin123")
 
      cy.xpath("//button[normalize-space()='Login']").click()

      
      cy.xpath("//p[@class='oxd-userdropdown-name']").should("eq", "Pooja Durgai")
      
      
    })
  
  
    it('Explicit Assertion', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
  
   
      cy.xpath("//input[@placeholder='Username']").type("Admin")
      cy.xpath("//input[@placeholder='Password']").type("admin123")
 
      cy.xpath("//button[normalize-space()='Login']").click()


      let expData = "Vishesh Rathod"

      cy.get(".oxd-userdropdown-name").then( (x)=>{

          let actData = x.text()
          expect(actData).to.not.equal(expData)


      })
  
    
      
    })
  
  })