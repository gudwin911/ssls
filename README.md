#codeceptjs test project

## Getting started

### Requirements

Before starting, make sure you have on your workstation:
- latest JDK (might be installed by [brew](https://brew.sh/) on macOS `brew cask install java`)
- [chrome](http://www.google.com/chrome) browser

### Project configuration

Start by cloning this project on your workstation.

```bash
$ git clone https://github.com/gudwin911/ssls.git
```

The next thing will be to install codeceptjs and selenium service using [npm](https://www.npmjs.com/get-npm):
```bash
$ cd ./ssls
$ npm install codeceptjs webdriverio --save-dev
$ npm i @wdio/selenium-standalone-service --save
```

The next thing you will need to install/update all the dependencies of the project using [Yarn](https://yarnpkg.com/en/):
```bash
$ yarn install
```

## How to run tests
* `$ yarn test` - running all tests defined in 'tests/acceptance/*_test.js' files
* `$ yarn test:steps` - running all tests defined in 'tests/acceptance/*_test.js' files with steps printed 
* `$ yarn allure` - creates allure report
* `$ yarn clean` - cleans output directory with test artifacts

By default tests are running in headless mode. To run them in regular mode just remove `--headless` arg in `codecept.conf.js` in ChromeOptions (string 19)
