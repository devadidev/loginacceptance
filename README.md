# loginacceptance

The Acceptance Criteria and related Acceptance Tests are provided in the file login_test.xlsx
The stubs for automating these are in the file project_test.js
The actionwords used are in the file actionwords.js
Additionally provided a hiptest config file (using cucumberstudio), that can be used to set up these tests to be run in CI/CD pipeline.

Constraints: 
The automation stubs are provided as an example and not fully CI/CD ready. Given more time, I'd implement the automation to run using the Puppeteer devtool protocol as runner and also with results to be generated in e.g. Allure report.
