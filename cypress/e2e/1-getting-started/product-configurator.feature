Feature: Product Configurator
  Scenario: Selecting Options

  Scenario: Summary Updates
    When I visit the product configurator page
    Then I should see the below product summary
    | Pages   | 170     |
    | Colour  | Ocean   |
    | Layout  | Dotted  |
    | Price   | £17.00  |

    When I click Sunset
    Then I should see product 2

    
    When I click Lined
    Then I should see product 3
    
    When I click Ocean
    Then I should see product 4

# # cypress/e2e/duckduckgo.feature
# Feature: duckduckgo.com
#   Scenario: visiting the frontpage
#     When I visit the product configurator page
    # Then I should see a search bar