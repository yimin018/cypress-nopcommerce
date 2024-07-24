describe('TS#001 - Login Page', () => {
  beforeEach(()=>
    cy.visit('https://admin-demo.nopcommerce.com/login')
  )
  
  it('TC001 - Login with blank email and password', () => {
    cy.get('.inputs').find('input[type = email]').invoke('val').then(inputValue => {
      if (inputValue) {
        cy.get('input[type = email]').clear()
      }
    })
    cy.get('.buttons').contains(/LOG IN/i).click()
    cy.get('.field-validation-error').should('contain.text','Please enter your email')
  })

  it('TC002 - Login with valid email and empty password',() => {
    cy.get('.inputs').find('input[type = email]').invoke('val').then(inputValue => {
      if (inputValue) {
        cy.get('input[type = email]').clear()
      }
    })
    cy.get('.inputs').find('input[type = email]').type('admin@yourstore.com')
    cy.get('.inputs').find('input[type = password]').invoke('val').then(inputValue => {
      if (inputValue) {
        cy.get('input[type = password]').clear()
      }
    })
    cy.get('.buttons').contains(/LOG IN/i).click()
    cy.get('.login-page').should('contain.text','The credentials provided are incorrect')

    // cy.get('.inputs').find('input[type = email]').invoke('val').then(inputValue => {
    //   if (inputValue) {
    //     cy.get('input[type = email]').clear()
    //   }
    // }).type('admin@yourstore.com')

    // cy.get('.inputs').find('input[type = password]').invoke('val').then(inputValue => {
    //   if (inputValue) {
    //     cy.get('input[type = password]').clear()
    //   }
    // }).type('adminedit')
    // cy.get('.buttons').contains(/LOG IN/i).click()
    // cy.get('.login-page').should('contain.text','The credentials provided are incorrect')
  })
    
  it('TC003 - Login with invalid email and valid password', () =>{
    cy.get('.inputs').find('input[type = email]').invoke('val').then(inputValue => {
      if (inputValue) {
        cy.get('input[type = email]').clear()
      }
    })
    cy.get('.inputs').find('input[type = email]').type('adminedit@yourstore.com')
    cy.get('.buttons').contains(/LOG IN/i).click().should('contain.text','No customer account found')

  })

  it.only('TC004 - Login with valid email and valid password', () =>{
    cy.get('.buttons').contains(/LOG IN/i).click().url().should('eq','https://admin-demo.nopcommerce.com/admin/')
  })





  
  })
    
