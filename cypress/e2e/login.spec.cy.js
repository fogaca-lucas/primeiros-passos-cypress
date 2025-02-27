import userData from '../fixtures/user-Data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('Login Orange HRM Tests', () => {

  const selectorList = {
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  }

  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password) 
    loginPage.checkAcessInvalid
  })

  it('Login - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password) 
    dashboardPage.checkDashboardPage()
  })

})