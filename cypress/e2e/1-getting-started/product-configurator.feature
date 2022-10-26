Feature: product-configurator
  Scenario: Selecting Options
    Given I visit the product configurator page
    And that "Sunset" is selected
    When I click "Ocean"
    Then I see that "Ocean" is selected

    And that "Dotted" is selected
    When I click "Lined"
    Then I see that "Lined" is selected

  Scenario: Summary Updates
    Given I visit the product configurator page
    Then I should see the below summary
    | Pages   | 170     |
    | Colour  | Sunset  |
    | Layout  | Dotted  |
    | Price   | £17.00  |

    When I click "Ocean"
    Then I should see the below summary
    | Pages   | 170     |
    | Colour  | Ocean   |
    | Layout  | Dotted  |
    | Price   | £17.00  |

    
    When I click "Lined"
    Then I should see the below summary
    | Pages   | 176     |
    | Colour  | Ocean   |
    | Layout  | Lined   |
    | Price   | £15.00  |

    When I click "Sunset"
    Then I should see the below summary
    | Pages   | 176     |
    | Colour  | Sunset  |
    | Layout  | Lined   |
    | Price   | £15.00  |
    
    

