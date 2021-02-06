describe("when clicking on sign in from the homepage user", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.findByText(/sign in/).click();
  });

  it("should go to the sign_in page", () => {
    cy.url().should("include", "/sign_in");
  });

  it("should see username and password inputs", () => {
    cy.findByLabelText(/username/i).should("exist");
    cy.findByLabelText(/password/i).should("exist");
  });
});