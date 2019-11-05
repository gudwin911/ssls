#codeceptjs test project

## Getting started

### Requirements

Before starting, make sure you have on your workstation:
- latest JDK (might be quickly installed by [brew](https://brew.sh/) on macOs `brew cask install java`).

### Project configuration

Start by cloning this project on your workstation.

```bash
$ git clone https://github.com/gudwin911/ssls.git
```

The next thing will be to install all the dependencies of the project using [Yarn](https://yarnpkg.com/en/):
```bash
$ cd ./ssls
$ yarn install
```

## How to run tests
* `$ yarn test` - running all tests defined in 'tests/acceptance/*_test.js' files
* `$ yarn test:steps` - running all tests defined in 'tests/acceptance/*_test.js' files with steps printed 
* `$ yarn allure` - creates allure report
* `$ yarn clean` - cleans output directory with test artifacts

By default tests are running in headless mode. To run them in regular mode just remove `--headless` arg in `codecept.conf.js` in ChromeOptions (string 19)
