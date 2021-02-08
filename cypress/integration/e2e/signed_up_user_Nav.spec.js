describe('signed up user can make a location and reviews then sign_out',()=>{
  beforeEach(()=>{
   cy.visit('/')
   cy.get('[href="/sign_in"]').click()
   cy.fixture('user.json').then((user)=>{
    
    cy.findByLabelText(/username/i).type(user.username)
    cy.findByLabelText(/password/i).type(user.password)
    cy.get('#submit').click()
    // cy.contains(/loading/i)

  })
   
  })
  it('should redirect to the locations index',()=>{
    cy.url().should('eql', 'http://localhost:8080/')
  })
  it('should be able to make review',()=>{
    cy.wait(800)
    cy.get(':nth-child(5) > :nth-child(1) > a').click()
    cy.get('[type="text"]').type('testing this review out')
    cy.get('[type="number"]').type(2)
    cy.get('#submit').click()

  })
  
  it('should navigate to the index page then to the create location page',()=>{
    cy.wait(800)

    cy.url().should('eql','http://localhost:8080/')
    cy.findByText('Add a location').click();
    cy.url().should('eql','http://localhost:8080/locations/new')
    cy.findByLabelText(/name/i).type('test dog location')
    cy.findByLabelText(/address/i).type('12 boronia avenue')
    cy.findByLabelText(/description/i).type('test dog location description')
    cy.get('[type="checkbox"]').check()  
    cy.get('#location_type_name').select('Dog park')
    cy.get('form').submit()
    cy.url().should('eql','http://localhost:8080/')
  }
  )
  it('should show favourites for the current user',()=>{
    cy.wait(800)
    cy.get('h2').should('include',/favourites/i)
    // cy.url().should('eql','http://localhost:8080/favourites')

    // cy.get('.sc-pFZIQ > :nth-child(1) > div > h1').should('include', 'test')

  })
  
  after(() => {
    // we need to clean up after we run the tests
    window.localStorage.removeItem("token")
    window.sessionStorage.removeItem("auth")
  })
})