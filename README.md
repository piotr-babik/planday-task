# planday-task

## Table of contents
* [General info](#general-info)
* [Setup](#setup)
* [Reporting](#reporting)

## General info
Sample automation testing project written in JS using Webdriver.io and Mocha.
Reporting via Spec and Allure.
	
## Setup
IMPORTANT: you will need to provide correct login and password in "login" and "password" fields in the wdio.conf.js file in order to run tests successfully.

To install this project, clone it, go to the root folder and run:

```
$ npm install
```

To run test suite, run:
```
$ npx wdio wdio.conf.js
```
or:
```
$  .\node_modules\.bin\wdio .\wdio.conf.js
```
To run a specific test suite, run:
```
.\node_modules\.bin\wdio .\wdio.conf.js --spec .\test\specs\{test suite filename}
```

## Reporting
This framework uses auto-generated Spec and Allure for test results reporting.
Spec results are visible in the terminal window at the end of test execution.
To display test reports in much more readable way you can use Allure (requires Java to be installed and added to the system PATH):
```
npm run allure-report
```
