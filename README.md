# Repository Project

This repository contains a flexible and extensible solution for a coding problem. The tools, techniques, response formats, and languages used to solve the problem are intentionally left open-ended to allow for flexibility.

### Prerequisites

Ensure that you have the following installed on your system:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/repository-project.git

   ```

2. Navigate to the project directory:

   ```bash
   cd repository-project

   ```

3. Install dependencies:
   ```bash
   npm install
   # or
    yarn install
   ```

## Running the Application

To start the application, run:
   ```bash
   npm install
   or
   yarn install
   ```

## Running Tests

To execute tests, run:

```bash
npm run test
```

# What's Included

**React Frontend**: The project includes a React-based frontend with Typescript for visualizing and interacting with the data.

**Redux State Management**: Utilizes Redux for state management to handle complex application state, I could have used local storage but for the demonstration purpose I used redux toolkit with persistent.

**Styled Components**: Styled Components are used for styling, providing a maintainable and component-centric styling approach.

**Jest and Testing Library**: Unit tests with Jest and Testing Library ensure code reliability.

# Extras Added and Why

**Persisting State with Redux-Persist**: Added redux-persist to persist the Redux state in local storage, ensuring a seamless user experience even after refreshing the page.

**Loading Indicator with Redux-Persist**: Implemented a loading indicator during the initial load of persisted state to enhance user feedback.

# If I Had More Time

_Given more time, I would_:

**Enhance Test Coverage**: Expand test coverage to include more edge cases and improve overall code coverage.

**Implement More Features**: Add additional features such as sorting, filtering, or pagination of pagesize to enhance the user experience.

**Improve UI/UX**: Focus on improving the overall design and user interface for a more polished look and feel.

** Error Handling**: enhance error handling to provide meaningful error messages and guide users when something goes wrong, such as failed API requests.

**Optimize Performance**: Optimize performance for final build, handling large datasets and add infinite scrolling pagination.
