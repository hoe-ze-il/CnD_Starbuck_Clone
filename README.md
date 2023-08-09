
# README

## Starbucks Clone

This is our Clone Website from Starbucks in Canada, which provide specific information about their menu, products, promotions, and more.

Our Starbucks Clone project is a website created using React and other related technologies, with the aim of replicating the functionality and design of the original Starbucks website.

Our team has worked hard to ensure that this clone is not only visually similar, but also responsive and user-friendly. We have used external libraries and frameworks such as React Dom, React Router Dom, Bootstrap, and Sass to make this project possible.

![StarBucks2](https://github.com/anb-hq/CnD_Starbucks_Clone/assets/121349786/f7f7b58e-ff9e-40f6-8bf2-538db4bf5dc0)

![StarBucks3](https://github.com/anb-hq/CnD_Starbucks_Clone/assets/121349786/50629258-bbc3-4dfe-8235-80704f5e24b1)

![StarBucks](https://github.com/anb-hq/CnD_Starbucks_Clone/assets/121349786/f883f929-1565-40e1-938b-b381df00fe17)


### Contributors

This Starbucks Clone project was developed by CnD team which consists of five members working together to ensure that the website is visually and functionality similar to the original Starbucks website and also responsive.

1. Soeun Sreynan
2. Mok Kimsang
3. Hoe Ze il
4. Kim Vannlithi
5. Duong Angchompou

## External library and framework:

### **React**

- React Dom(Responsible as the entry point to the DOM and server renderers for React)
- React Router Dom(To navigate to the different page route)
- Bootstrap
- Sass

## Folder Structure

This structure follows the "Separate by Feature" principle, where each feature or module has its own folder. Here's a brief explanation of the folders and files:

- **public**: Holds public files like index.html , favicon.ico and image.
- **src**: Hold all the necessary folders and file to establish the interface of the website
    - **components**: Contains reusable components organized into subfolders for related components.
    - **pages**: Stores difference page folders for better folder management
    - **data**: storage for the data of the items .
    - ![Folders](https://github.com/anb-hq/CnD_Starbucks_Clone/assets/121349786/7b9267c6-ca90-4ec9-a875-cc27e08d1859)

### Convention Guide Link: [Convention Guide](https://www.notion.so/Convention-Guide-d448e73ba56e4fa2bbb5fe27a2755d73?pvs=21)

## Git Flow Method

We used the Git Flow method for our Starbucks Clone project. This allowed us to organize our work into different branches, including feature branches for each individual feature or module, a development branch to merge all features, and a master branch for the final release. This method helped us to manage our code changes effectively and collaborate efficiently as a team.

1.  **Master Branch:**
    - Represents the stable and production-ready codebase.
    - Reflects the current state of the our Starbucks website.
2. **Develop Branch:**
    - Serves as the integration branch for ongoing development.
    - New features and fixes are merged into this branch.
    - Represents the latest state of the application with features being developed.
3. **Feature Branches:**
    - Responsible for specific functionalities related to the Starbucks website.
    - Feature branches:
        - **`feature/Gift-cards`**
        - **`feature/Menu`**
        - **`feature/Sign-in`**
        - **`feature/Join-now`**
        - **`feature/New-Components`**
4. **Release Branches:**
    - To prepare a new version of our website for release:
        - Create a release branch from the develop branch.
        - Perform testing, bug fixes, and any final adjustments specific to the release.
        - Release branches:
            - **`release/1.0`**
            - **`release/2.0`**
5. **Bugfix Branches**:
    - If the code changes made from the feature branch were rejected after a release, sprint or demo, any necessary fixes after that should be done on the bugfix branch.
        - Bugfix Branch:
            - **`bugfix/logo-bug`**
6. **Hotfix Branches:**
    - For critical bug fixes in the production codebase:
        - Create a hotfix branch from the main branch.
        - Fix the bug and ensure the fix is applied both to the main and develop branches.
            - **`hotfix/1.1`**
            - **`hotfix/1.2`**

Gitflow Workflow Reference:[https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=What is Gitflow%3F,lived branches and larger commits](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=What%20is%20Gitflow%3F,lived%20branches%20and%20larger%20commits).
  
