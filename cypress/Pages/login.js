class loginPage{
    elements = {
        emailInput: () => cy.get('input[id="user-name"]'),
        pwInput: () => cy.get('input[name="password"]'),
        nextBttn: () => cy.get('input[name="login-button"]')
    }
    typeLockedUsername() {
        this.elements.emailInput().type("locked_out_user");
    }

    typeCorrectUsername() {
        this.elements.emailInput().type("standard_user");
    }

    typePwd() {
        this.elements.pwInput().type("secret_sauce");
    }

    clickNext(){
        this.elements.nextBttn().click();
    }
}
module.exports = new loginPage();