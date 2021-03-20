# Divvy Homework

## Objectives

 [X] Write a basic user interface that allows users to enter, edit, and remove transactions.
   * Transaction create, update, and delete
   * Add User or select existing users, when creating transaction
   * add, update, delete mutations(and queries) for Transaction, User, and Merchant added in `webserver`

 [X] Provide a pie chart of total spent per category

 [-] Create a user setting that can convert the displayed numbers to Roman Numerals.
   * Created/tested `getRomanNumeral` function but not implemented.

 [X] Seed the database.
   * modified the web server `index.js` to tear-down/seed db 

 [X] Add a user experience that showcases your abilities on the front end such as:
   * Transactions / Users routes
   * Created `/views`, `/hooks`, `/components`, `/common`
        - Top level view handle querying, mutations, and top level state
        - Added `AppContext` for the sidebar actions
        - Added styled components `Button`, `Form`, `Table`, `View`, and view specific components
        - Added common propTypes and utils to `/common`
        - Added tests for util functions `utils.test.js`: `makeDataTestId`, `getHeadersAndRows`, `getRomanNumeral`
        - Added querys, mutations, and fragments to `/gql`
