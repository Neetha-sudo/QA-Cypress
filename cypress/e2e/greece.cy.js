export class Greece{
  enterUsername()
  {
    let xtra=5
    cy.get('input[name="username"]').type("Admin");
  }
  enterPassword()
  {
    cy.get('input[name="password"]').type('admin123{enter}');
    

  }
  clickLogin()
  {
    cy.get('.oxd-userdropdown-name').click();
  }
}