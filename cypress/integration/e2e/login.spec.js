
import { userBuilder } from "../../support/generate";
describe("User sign up redirects to locations", () => {
  beforeEach(() => {
    const { email, password, username } = userBuilder()
    cy.visit("/sign_up");
    ;
    cy.url().should("include", "/sign_up");
    cy.findByLabelText(/username/i).type(username);
      cy.findByLabelText(/password/i).type(password);
      cy.get('#confirmPassword').type(password);
      cy.findByLabelText(/email/i).type(email);
    cy.get('form').submit()
    cy.url().should('eql',"http://localhost:8080/")
  });
//  verifying the sign in button works

  
  // user submision

  
  it('should allow the user to make a location',()=>{
    cy.findByText('Add a location').click();
    cy.url().should('eql','http://localhost:8080/locations/new')
    cy.findByLabelText(/name/i).type('test dog location')
    cy.findByLabelText(/address/i).type('12 boronia avenue')
    cy.findByLabelText(/description/i).type('test dog location description')
    cy.get('[type="checkbox"]').check()  
    cy.get('#location_type_name').select('Dog park')
    cy.get('form').submit()


  })
  after(() => {
    window.localStorage.removeItem("token")
    window.sessionStorage.removeItem("auth")
  })
  
});
// cy.findByLabelText(/username/i).type(user.username);
//       cy.findByLabelText(/password/i).type(user.password);
//       cy.get('#confirmPassword').type(user.password);
//       cy.findByLabelText(/email/i).type(user.email);