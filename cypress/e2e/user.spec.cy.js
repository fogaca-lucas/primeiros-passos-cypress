import userData from '../fixtures/user-Data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Orange HRM Tests', () => {

  const selectorList = {
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close" ,
    submitButton: "[type='submit']",
    genericComboBox: ".oxd-select-text--arrow",
    secondItenComboBox: ":nth-child(6) > span",
    thirdItenComboBox: ".oxd-select-dropdown > :nth-child(2)"


  }

  it.only('User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password) 

    dashboardPage.checkDashboardPage()
    
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
    cy.get(selectorList.genericComboBox).eq(0).click()
    cy.get(selectorList.secondItenComboBox).click()
    cy.get(selectorList.genericComboBox).eq(1).click()
    cy.get(selectorList.thirdItenComboBox).click()
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

    
    
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(loginPage.selectorList().usernameField).type(userData.userFail.username)
    cy.get(loginPage.selectorList().passwordField).type(userData.userFail.password)
    cy.get(loginPage.selectorList().loginButton).click()
    cy.get(loginPage.selectorList().wrongCredentialAlert)
  })
})