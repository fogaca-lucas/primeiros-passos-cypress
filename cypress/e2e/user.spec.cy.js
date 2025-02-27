import userData from '../fixtures/user-Data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'


var Chance = require('chance');

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  const selectorList = {
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  }

  it('User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password) 

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetailts(chance.first(), chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails('EmployeeId', 'Other Id', 'Other Id Test', '1998-01-05')
    myInfoPage.fillStatus('1998-05-01')
    myInfoPage.saveForm()
     
  })

})