# Divvy Homework
- Followed the directions in `/webapp` for setup. `yarn install`, `yarn start`
## Objectives

[X] Write a basic user interface that allows users to enter, edit, and remove transactions.

- Transaction create, update, and delete
- Add User or select existing users, when creating transaction
- add, update, delete mutations(and queries) for Transaction and User.
- CRUD for Merchant added to the `webserver`, but not implemented in the frontend.

[X] Provide a pie chart of total spent per category

[X] Create a user setting that can convert the displayed numbers to Roman Numerals.

- Created/tested `getRomanNumeral`, implemented a simple button `/users/:id`

[X] Seed the database.

- modified the web server `index.js` to tear-down/seed db

[X] Add a user experience and styling

- Views `/transactions`, `/users`, and `/userId`. Edit/add transactions within a sidebar
- Top level views handle querying, mutations, and top level state
- Added `AppContext` for the sidebar actions
- Added styled components `Button`, `Form`, `Input`, `Table`, `View`
- Added common propTypes and utils to `/common`
- Added tests for util functions
- Added queries, mutations, and fragments to `/gql`
