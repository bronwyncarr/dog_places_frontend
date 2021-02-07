
import { userBuilder } from "../../support/generate";
describe("when clicking on login from the homepage user", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.findByLabelText(/sign in/i).click();
  });
//  verifying the sign in button works

  it("should go to the sign_in page", () => {
    
    cy.url().should("include", "/sign_in");
  });
  // user submision
  it(" should be able to click on the submit and be redirected to the location list",()=>{
    const { email, password, username } = userBuilder()
    cy.findByLabelText(/username/i).type(username);
      cy.findByLabelText(/password/i).type(password);
      cy.get('#confirmPassword').type(password);
      cy.findByLabelText(/email/i).type(email);
    cy.get('form').submit()
    cy.url().should('eql',"http://localhost:8080/")
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