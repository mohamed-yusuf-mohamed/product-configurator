const { Given, When, Then } =  require("@badeball/cypress-cucumber-preprocessor")

Given("I visit the product configurator page", () => {
  cy.visit("http://localhost:3000")
})

When("I click something", () => {
  
})

When("I click {string}", (option) => {
  cy.contains(option).click()
})

Then("I should see the below summary", (table) => {
  const summaryItem = table.rowsHash()
  Object.values(summaryItem).forEach((value) => cy.get("[data-testid='product-summary']").contains(value))
})

