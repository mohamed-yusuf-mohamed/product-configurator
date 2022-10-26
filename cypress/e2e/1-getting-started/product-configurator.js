import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit the product configurator page", () => {
  cy.visit("http://localhost:3000")
})

// Then("I should see the default product selected", () => {

// })

When("I click Sunset", () => {

})

Then("I should see product ${id} in the summary", () => {

})

When("I click Lined", () => {

})

When("I click Ocean", () => {

})


// import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// When("I visit duckduckgo.com", () => {
//   cy.visit("https://duckduckgo.com/");
// });

// Then("I should see a search bar", () => {
//   cy.get("input").should(
//     "have.attr",
//     "placeholder",
//     "Search the web without being tracked"
//   );

//   assert.deepEqual({}, {});
// });
