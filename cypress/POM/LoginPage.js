class Login
{

    txtUser="//input[@placeholder='Username']";
    txtPass="//input[@placeholder='Password']";
    btnSubmit="//button[normalize-space()='Login']";

    setuserName(userName){

        cy.xpath(this.txtUser).type(userName);
    }

    setPassword(usePass){

        cy.xpath(this.txtPass).type(usePass);

}

     
    clickOnButton(){

        cy.xpath(this.btnSubmit).click();

 }

}

export default Login