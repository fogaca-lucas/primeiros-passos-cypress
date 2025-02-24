import userData from '../fixtures/user-Data.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name= 'username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-widget-name",
    wrongCredentialAlert: "[role= 'alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close" ,
    submitButton: "[type='submit']"

  }

  it.only('User Info Update - Success', () => {

    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSucess.username)
    cy.get(selectorList.passwordField).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('FirstName')
    cy.get(selectorList.middleNameField).clear().type('MiddleName')
    cy.get(selectorList.lastNameField).clear().type('LastName')
    cy.get(selectorList.genericField).eq(3).clear().type('EmployeeId')
    cy.get(selectorList.genericField).eq(4).clear().type('OtherId')
    cy.get(selectorList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorList.dateField).eq(0).clear().type('2032-11-02')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.dateField).eq(1).clear().type('1998-05-01')
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    
    
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})