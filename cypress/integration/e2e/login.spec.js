
import { userBuilder } from "../../support/generate";
describe("User sign up redirects to locations", () => {
  it('should allow a new user to make a location',()=>{
    const { email, password, username } = userBuilder()
    cy.visit("/sign_up");
    ;
    cy.url().should("include", "/sign_up");
    cy.get("#username").type(username);
      cy.get('#password').type(password);
      cy.get('#confirmPassword').type(password);
      cy.get('#email').type(email);
      cy.get('#submit').click()
      cy.wait(8000)
      cy.get('[href="/locations/new"]').click()
      cy.url().should('include','/locations/new')

      cy.get('#name').type('test dog location')
      cy.get('#address').type('12 boronia avenue')
      cy.get('#description').type('test dog location description')
      cy.get('#Toilets').check() 
      cy.get('#location_type_name').select('Dog park')
      cy.get('form').submit()
  
      cy.url().should('include','/')

 

  });
  
  
  
  
  after(() => {
    window.localStorage.removeItem("token")
    window.sessionStorage.removeItem("auth")
  })
  
});
// cy.findByLabelText(/username/i).type(user.username);
//       cy.findByLabelText(/password/i).type(user.password);
//       cy.get('#confirmPassword').type(user.password);
//       cy.findByLabelText(/email/i).type(user.email);