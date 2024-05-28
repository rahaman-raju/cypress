import Login from "../POM/LoginPage.js";

describe('Page Object Model test', () => {


    it('POM Login Test', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
    
      const ln=new Login();

      ln.setuserName("Admin");
      ln.setPassword("admin123");
      ln.clickOnButton();


      
      
    })

})

