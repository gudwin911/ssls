exports.config = {
    bootstrap: null,
    mocha: {},
    name: 'ssls',
    tests: './tests/acceptance/*_test.js',
    timeout: 10000,
    output: './output',
    helpers: {
        WebDriver: {
            url: 'https://www.sbzend.ssls.com/',
            smartWait: 5000,
            waitForTimeout: 5000,
            browser: 'chrome',
            host: '127.0.0.1',
            port: 4444,
            capabilities: {
                chromeOptions: {
                    w3c: false,
                    args: ['--headless', '--disable-gpu', '--window-size=1920x1080', '--no-sandbox']
                }
            },
            restart: false,
            windowSize: '1920x1080',
            timeouts: {
                script: 60000,
                'page load': 30000
            }
        },
    },
    include: {
        I: './steps/steps_file.js',
        Header: './fragments/header.js',
        Filters: './fragments/filters.js',
        HomePage: './pages/HomePage.js',
        AuthorizationPage: './pages/AuthorizationPage.js',
        ProfilePage: './pages/ProfilePage.js',
    },
    plugins: {
        allure: {},
        wdio: {
            enabled: true,
            services: ['selenium-standalone']
        }
    },
};
