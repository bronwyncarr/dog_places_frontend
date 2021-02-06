describe("when clicking on sign in from the homepage user", () => {
  before(() => {
    cy.fixture("user.json").then((user)=>{
      cy.visit("/sign_up");
      cy.findByLabelText(/username/i).type(user.username);
      cy.findByLabelText(/password/i).type(user.password);
      cy.findByLabelText(/email/i).type(user.email);
    })
    
  });

  it("should go to the sign_in page", () => {
    cy.url().should("include", "/sign_in");
  });
  it(" should be able to click on the submit and be redirected to the location list",()=>{
    cy.get('form').submit()
    cy.url().should('eql',"http://localhost:8080/")
  })
  after(() => {
    window.localStorage.removeItem("token")
    window.sessionStorage.removeItem("auth")
  })
  
});
