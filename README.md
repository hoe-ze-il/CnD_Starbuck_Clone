# Starbuck Clone

This is an online platform for Starbucks in Canada, which provide specific information about their menu, products, promotions, store location, careers, and more.

#### This clone website can be accessed here: [Starbucks Clone](https://kimsang-mok.github.io/Deploy_Starbucks/)

### Contributors

1. Morido
2. Sreynan
3. Ze il
4. Vannlithi
5. Chompou
6. Kimsang



# Convention Guide

This convention guide for Our Starbucks Cloning Project is designed to help ensure that the codebase is maintainable and scalable. This guide provides an overview of the conventions to follow, including consistent indentation,  file naming conventions, variable naming conventions, and class naming conventions. Following these best practices will help ensure that the code is organized and easy to understand.

This also covers recommended folder structure for the project. The folder structure should be easy to navigate and understand, with separate folders for components, pages, and styles.

## React Best Practice

When it comes to writing JavaScript code, following conventions can greatly improve code readability, maintainability, and collaboration. We’re going to use these wildly accepted conventions for JavaScript:

1. **Naming Conventions**:
    - Use descriptive and meaningful names for variables, functions, and classes.
    - Variable and function names should be in camelCase (e.g., `myVariable`, `calculateTotal`).
    - Class names should be in PascalCase (e.g., `MyClass`, `UserModel`).
    - Constants should be in uppercase with underscores (e.g., `MAX_VALUE`, `API_URL`).
2. **Indentation and Formatting**:
    - Use consistent indentation (2 spaces) to improve code readability.
    - Use semicolons to end statements, even though they are not strictly required in React JSX.
    - Place opening braces `{` on the same line as the corresponding function or control statement. Use proper indentation.
    - Use double quotes or tile symbol consistently for string literals.
3. **Commenting**:
    - Add comments to explain complex logic, improve code understanding, and provide context to other member.
    - Use inline comments sparingly and focus on explaining why, you use it.
    - Use block comments (`/* ... */`) for longer explanations or documenting functions and classes.
4. **Variable Declarations**:
    - Declare variables using `let` or `const`. Avoid using `var` unless necessary.
    - Use `const` for variables that do not need to be reassigned.
    - Declare variables at the top of their scope to avoid hoisting-related issues.
5. **Function Declarations**:
    - Use function declarations (`function myFunction() { ... }`) for named functions.
    - Use arrow functions (`const myFunction = () => { ... }`) for anonymous functions or when a concise syntax is preferred.
    - Avoid using anonymous functions for event handlers and callbacks. Define them separately for better readability.
6. **Modules and Imports/Exports**:
    - Use ES modules (`import` and `export`) to organize and share code across files.
    - Use default exports for modules that have a single primary export.
    - Prefer named exports for modules with multiple exports to enhance clarity and avoid confusion.
7. **Error Handling**:
    - Use try-catch blocks to handle exceptions and errors.
    - Throw meaningful and descriptive errors with relevant information.
    - Avoid swallowing errors silently. Log or handle them appropriately.
8. **Use Strict Mode**:
    - Add `"use strict";` to enforce stricter rules and prevent common mistakes.
9. **Avoid Global Scope Pollution**:
    - Limit the use of variables and functions in the global scope to minimize conflicts.
    - Wrap your code in an IIFE (Immediately Invoked Function Expression) to create a private scope.
10. **Code Consistency**:
    - Follow a consistent coding style throughout project.
    - Use a linter (e.g., ESLint) to enforce code style and catch common errors.
    - Configure your editor to use consistent formatting (e.g., automatic indentation, trailing comma, etc.).

## Sass Best Practices

- Variable names: Use camelCase (e.g. `$mainColor`, `$fontSize`).
- Class names: Use hyphen-case (e.g. `header-container`, `button-primary`).

## Folder Structure

This structure follows the "Separate by Feature" principle, where each feature or module has its own folder. Here's a brief explanation of the folders and files:

- **components**: Contains reusable components organized into subfolders for related components.
- **containers**: Holds container components responsible for managing state and passing data to presentational components.
- **styles**: Stores component-specific styles or global styles.
- **utils**: Contains utility functions or helper modules used across the project.
- **services**: Holds files related to API calls or external service interactions.
- **routes**: Contains files for configuring client-side routing.
- **constants**: Stores constant values or configuration settings.
- **tests**: Holds unit tests and integration tests organized into subfolders.
- **config**: Contains configuration files, such as web-pack or Babel configurations.
- **build**: Placeholder for build-related files and scripts.
- **public**: Holds public files like index.html and favicon.ico.

```markdown
/src
  /components
    /Header
      Header.js
      Header.scss
    /Sidebar
      Sidebar.js
      Sidebar.scss
    /Button
      Button.js
      Button.scss
  /containers
    /Home
      HomeContainer.js
      HomeContainer.scss
      Home.js
      Home.scss
  /styles
    global.scss
  /utils
    api.js
    helpers.js
  /services
    authService.js
    apiService.js
  /routes
    index.js
  /constants
    config.js
    enums.js
  /tests
    /unit
      Header.test.js
      Button.test.js
    /integration
      Home.test.js
  /config
    webpack.config.js
    babel.config.js
  /build
    ...
/public
  index.html
  favicon.ico
```
