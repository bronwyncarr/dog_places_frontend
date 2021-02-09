describe("signed up user can make a location and reviews then sign_out", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[href="/sign_in"]').click();
    cy.fixture("adminUser.json").then((user) => {
      cy.findByLabelText(/username/i).type(user.username);
      cy.findByLabelText(/password/i).type(user.password);
      cy.get("#submit").click();
    });
  });
  it("should redirect to the locations index", () => {
    cy.url().should("eql", "http://localhost:8080/");
  });
  it("should be able to make review", () => {
    cy.get("[data-testid=location_2]").click();

    cy.url().should("include", "/2");
    cy.get('[type="text"]').type("testing this review out");
    cy.get('[type="number"]').type(2);
    cy.get("#submit").click();
  });

  it("should navigate to the index page then to the create location page", () => {
    cy.wait(800);

   
    cy.url().should('eql','http://localhost:8080/')
    cy.findByText('Add a location').click();
    cy.url().should('eql','http://localhost:8080/locations/new')
    cy.get('#name').type(' dog park')
      cy.get('#address').type('12 boronia avenue')
      cy.get('#description').type('test dog location description')
      cy.get('#Toilets').check() 
      cy.get('#location_type_name').select('Dog park')
      cy.get('form').submit()
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
  });
  it("should show favourites page", () => {
    cy.wait(800);
    cy.get("h2").should("include", /favourites/i);
  });
  it("should not render an alert on location change for admin users", () => {
    cy.get("[data-testid=location_2]").click();

    cy.get('[href="/locations/2/edit"]').click();
    cy.get("#address").type("cypress test address");
   
  });

  after(() => {
    // we need to clean up after we run the tests
    window.localStorage.removeItem("token");
    window.sessionStorage.removeItem("auth");
  });
});
