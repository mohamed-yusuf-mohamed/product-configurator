Feature: product configurator
  Scenario: selecting products
    When I visit the product configurator page
    Then I should see the default product selected
    
    When I click Sunset
    Then I should see product 2

    
    When I click Lined
    Then I should see product 3
    
    When I click Ocean
    Then I should see product 4 in the summaru

# # cypress/e2e/duckduckgo.feature
# Feature: duckduckgo.com
#   Scenario: visiting the frontpage
#     When I visit the product configurator page
    # Then I should see a search bar