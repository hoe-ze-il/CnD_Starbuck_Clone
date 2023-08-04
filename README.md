# Convention Guide

# Starbuck Clone

This is our Clone Website from Starbucks in Canada, which provide specific information about their menu, products, promotions, store location, and more.


![StarBucks2](https://github.com/anb-hq/CnD_Starbucks_Clone/assets/121349786/f7f7b58e-ff9e-40f6-8bf2-538db4bf5dc0)

![StarBucks3](https://github.com/anb-hq/CnD_Starbucks_Clone/assets/121349786/50629258-bbc3-4dfe-8235-80704f5e24b1)

![StarBucks](https://github.com/anb-hq/CnD_Starbucks_Clone/assets/121349786/f883f929-1565-40e1-938b-b381df00fe17)



### Contributors

1. Sreynan
2. Kimsang
3. Ze il
4. Vannlithi
5. Chompou

# Convention Guide

This convention guide for Our Starbucks Cloning Project is designed to help ensure that the codebase is maintainable and scalable. This guide provides an overview of the conventions to follow, including consistent indentation,  file naming conventions, variable naming conventions, and class naming conventions. Following these best practices will help ensure that the code is organized and easy to understand.

This also covers recommended folder structure for the project. The folder structure should be easy to navigate and understand, with separate folders for components, pages, and styles.

## HTML

### 1**. Use meaningful tags**

Each section of your web page should be built using the most appropriate for the content. It’s best to avoid excessive use of generic tags, such as <div> when there could be a more descriptive tag for the job such as <section>, <article>, and so on.

### 2**. Don’t use inline styles**

It may seem like an easy route to place styling in line with the code instead of creating an external style sheet. However, inline styles are not a good coding practice because it makes it harder to update and maintain a website. 

### 3**. Use alt attribute with images**

It is not required to have an alt attribute with images, which makes it easy to ignore. However, it is important to have a meaningful alt attribute for validation and accessibility reasons. The alt attribute provides context to screen readers so it should be descriptive as to what the image contains.

### 4. **Close Your Tags**

Closing all your tags is a W3C specification. To avoid encountering validation errors always remember to have a closing tag for every tag created.

## Styling

### Reset CSS

CSS Reset help with the inconsistencies across different browsers when developing websites. All browsers have default rules with properties and values applied to all pages before loading files. Due to the cascading nature of CSS, any styles the browser uses will remain unless explicitly overridden. Therefore this resetting  will targets all rules that the different browsers apply defaults to and resets them to their minimum possible value.

### Grid & Flex

<aside>
💡 Use Grid When

</aside>

1. **Complex Layouts:** CSS Grid is particularly powerful for creating complex two-dimensional layouts. If your design involves both rows and columns with varying sizes and alignment needs, CSS Grid is a great choice.
2. **Grid-like Structures:** When you need to create a true grid structure with consistent gutters and a clear relationship between items, CSS Grid is more intuitive and efficient.
3. **Layout Control:** CSS Grid offers fine-grained control over the placement of items, making it suitable for creating magazine-like layouts, dashboard designs, and any other layout that requires precise control.
4. **Overlapping Items:** If you need items to overlap each other, CSS Grid provides a simple way to achieve this effect, which can be tricky to do with Flexbox.
5. **Responsive by Default:** CSS Grid allows you to create responsive layouts without relying heavily on media queries. You can use features like fractional units and minmax() to create flexible grids that adapt to different screen sizes.

<aside>
💡 Use Flexbox When

</aside>

1. **One-Dimensional Layouts:** Flexbox is best for arranging items in a single dimension — either as rows or columns. It excels at distributing space along the main axis while handling alignment along the cross axis.
2. **Equal Height Columns:** If you want columns to have equal heights regardless of their content, Flexbox can help you achieve this effect without using additional tricks.
3. **Content Order:** Flexbox allows you to change the order of items visually without affecting the source order in the HTML. This is useful for creating responsive designs where the order of content should change based on screen size.
4. **Alignment and Distribution:** Flexbox is excellent for aligning items both horizontally and vertically, as well as distributing space between them along the main axis.
5. **Simple Component Layouts:** When dealing with simpler components like navigation bars, cards, or buttons, Flexbox is often more straightforward and requires less code than CSS Grid.
6. **Fluid Resizing:** If you want items to dynamically resize to accommodate varying content, Flexbox flexibility can be more suitable.

### Root Reference in StarBucks Website

```css
:root {
    --colorWhite: #fff;
    --colorNeutralCool: #f9f9f9;
    --colorNeutralWarm: #f2f0eb;
    --colorCeramic: #edebe9;
    --colorBlack: #000;
    --colorGreenStarbucks: #006241;
    --colorGreenAccent: #00754a;
    --colorGreenLight: #d4e9e2;
    --colorHouseGreen: #1e3932;
    --colorGreenStarbucksHsl: 160 100% 19%;
    --colorGreenAccentHsl: 158 100% 23%;
    --colorGreenLightHsl: 160 32% 87%;
    --colorHouseGreenHsl: 164 31% 17%;
    --colorTextBlack: rgba(0,0,0,.87);
    --colorTextBlackSoft: rgba(0,0,0,.58);
    --colorTextWhite: #fff;
    --colorTextWhiteSoft: hsla(0,0%,100%,.7);
    --typefacePrimary: SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif;
    --textSize1: 12px;
    --textSize2: 14px;
    --textSize3: 16px;
    --outerGutter: 16px;
    --outerGutterMedium: 24px;
    --cardBorderRadius: 12px;
    --cardBoxShadow: 0px 0px .5px 0px rgba(0,0,0,.14),0px 1px 1px 0px rgba(0,0,0,.24);
    --cardBackgroundColor: #fff;
    --columnWidthSmall: 343px;
    --columnWidthMedium: 500px;
    --columnWidthLarge: 720px;
    --columnWidthXLarge: 1440px;
}
```

## React Guideline

When it comes to writing JavaScript code, following conventions can greatly improve code readability, maintainability, and collaboration. We’re going to use these widely accepted conventions for JavaScript:

1. **Naming Conventions**:
    - Use descriptive and meaningful names for variables, functions, and classes.
    - Variable and function names should be in camelCase (e.g., `myVariable`, `calculateTotal`).
    - Class names should be in PascalCase (e.g., `MyClass`, `UserModel`).
    - Constants should be in uppercase with underscores (e.g., `MAX_VALUE`, `API_URL`).
2. **Indentation and Formatting**:
    - Use consistent indentation (4 spaces) to improve code readability.
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
- **public**: Holds public files like index.html and favicon.ico.
  
![Folders](https://github.com/anb-hq/CnD_Starbucks_Clone/assets/121349786/7b9267c6-ca90-4ec9-a875-cc27e08d1859)
