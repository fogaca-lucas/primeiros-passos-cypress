class DashbobardPage {

    selectorsList() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-widget-name",
    }

    return selectors;
    }

    checkDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }
}

export default DashbobardPage