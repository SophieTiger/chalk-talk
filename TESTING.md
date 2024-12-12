<p align="center">
  <img src="./src/assets/chalk_logo_white.png" alt="Chalk Talk Logo" width="200"/>
</p>

<a name="top"></a>
# Testing
This is the TESTING file for the [Chalk Talk](https://chalk-talk-react-444e4f93c93c.herokuapp.com/) website.

Return back to the [README.md](README.md) file.

## Table of Contents
Validation
HTML Validation
CSS Validation
JavaScript Validation
ESLint
Steps to Run JavaScript Validation
Prettier for Code Formatting
Lighthouse
Wave Accessibility Evaluation
Manual Testing
User Input/Form Validation
Browser Compatibility
Toastify Messages Implementation Testing
Responsiveness
Automated Testing
Tools Used
Running Tests


## Validation
To ensure the reliability, usability, and accessibility of Chalk Talk, various validation methodologies were implemented. These validations ensure that the application not only meets development standards but also provides a seamless user experience across different platforms and browsers. Below is an overview of the validation processes.

### HTML Validation
-   **Tool Used:** [HTML W3C Markup Validator](https://validator.w3.org/)
-   **Purpose:** Validates the HTML code of the application to ensure it is free from syntax errors and adheres to the standards set by the World Wide Web Consortium (W3C).
-   **Process:** All HTML pages of Chalk Talk are checked through the W3C validator to identify and fix any markup errors or warnings.

Validation results with errors in index.html:
![HTML validator errors](./readme/testing/index.html_errors.png)

To test if this is an issue on the deployed site I inspected the page source in the browser to see if the %PUBLIC_URL% placeholders had been replaced with actual paths:
![index.html page source](./readme/testing/page_source_index.png)

Since the %PUBLIC_URL% was not present I assume that this indicates that the build process on Heroku is handling the %PUBLIC_URL% placeholders as expected. The Create React App build tool is replacing these placeholders with the appropriate root path for the deployed application.

When removing %PUBLIC_URL% from the code in the validator, all errors are gone:
![HTML validator no errors](./readme/testing/index.html_validation.png)

### CSS Validation
-   **Tool Used:** [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
-   **Purpose:** Ensures the CSS code is compliant with W3C standards, free from syntax errors, and follows best practices for styling.
-   **Process:** All CSS files are validated through the W3C CSS Validation Service to identify and rectify any issues.

![CSS Validation](./readme/testing/css_validator.png)

**CSS Warnings:** This project includes custom styles that make use of vendor-specific extensions and pseudo-elements to ensure a consistent and polished user experience across various browsers and operating systems. During the linting process, certain warnings may appear, indicating the use of these vendor-specific extensions. These warnings are expected and can be safely ignored.

### JavaScript Validation
-   **Tool Used:** [ESLint](https://eslint.org/)
-   **Purpose:** To detect errors and potential problems in the JavaScript code, ensuring that all scripts run efficiently and are error-free. ESLint helps enforce consistent coding styles and best practices by identifying and fixing problematic patterns in JavaScript code.
-   **Process:** JavaScript code is run through ESLint to identify issues related to syntax, deprecated methods, and other inefficiencies.

**Steps to Run JavaScript Validation**
-   Install Dependencies: Ensure all required packages are installed by running: `npm install`
-   Run ESLint: To run ESLint across the whole project and identify any issues: `npx eslint .`

![ESLint warnings](./readme/testing/warnings_eslint.png)
    -   After fixing the warnings and installing "@babel/plugin-proposal-private-property-in-object" as suggested all warnings are now cleared.
 
**Prettier for Code Formatting**
To maintain a consistent code style across the project I used the terminal to run Prettier on my entire project:
-   Install Prettier globally: `npm install -g prettier`
-   Run: `prettier --write "src/**/*.{js,jsx}"`

## Lighthouse
-   **Tool Used:** [Google Lighthouse](https://en.wikipedia.org/wiki/Google_Lighthouse)
-   **Purpose:** To assess the quality of web pages in terms of performance, accessibility, progressive web apps, SEO, and best practices.
-   **Process:** Chalk Talk is tested with Google Lighthouse, which provides a detailed report on various aspects of the site’s performance and offers recommendations for improvement.

**Home Page**
**Sign In Page**
**Sign Up Page**
**Add Post Page**
**Friends Feed Page**
**PR's Page**
**Profile Page**

## Wave Accessibility Evaluation
-   **Tool Used:** Wave Web Accessibility Evaluation Tool
-   **Purpose:** To ensure that the website is accessible to individuals with disabilities by identifying and suggesting fixes for web accessibility issues.
-   **Process:** The Wave tool evaluates each page of Chalk Talk to ensure it complies with accessibility standards like WCAG and Section 508.

![Wave accessibility test](./readme/testing/wave_test.png)

Manual Testing
User Input/Form Validation
Browser Compatibility
Toastify Messages Implementation Testing
Responsiveness
Automated Testing
Tools Used
Running Tests


[Back to top](#top)