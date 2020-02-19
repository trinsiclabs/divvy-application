Feature: Todos

Background:
    Given I am logged in as the demo user
    And I navigate to "PAGES.TODOS.PATH"

Scenario: View list of todos
    Then I should see the page title "PAGES.TODOS.TITLE"
    And I should see the "todos" element
    And the "todos" table should have a column called "Name"
    And the "todos" table should have a column called "Actions"
    And the "todos" table should have "5" rows
    And column "1" row "1" of the "todos" table should contain "Set up registration desk"
