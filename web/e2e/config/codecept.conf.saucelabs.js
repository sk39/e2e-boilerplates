const env = require("../scripts/env")
exports.config = {
    helpers: {
        WebDriver: {
            host: 'ondemand.us-west-1.saucelabs.com',
            path: '/wd/hub',
            url: env.TARGET_URL,
            user: env.USERNAME,
            key: env.ACCESS_KEY,
            browser: 'chrome',
            smartWait: 8000,
            desiredCapabilities: {}
        },
        // SauceHelper: {
        //     require: "codeceptjs-saucehelper"
        // },
    },
    plugins: {
        wdio: {
            enabled: true,
            services: ['sauce'],
            user: env.USERNAME,
            key: env.ACCESS_KEY,
        }
    },
    // For parallel execution
    multiple: {
        bs: {
            browsers: [
                {
                    browser: "chrome",
                    desiredCapabilities: {
                        'project': 'e2e_boilerplate_web',
                        'build': 'Sample',
                        'name': 'Sample Test Chrome',
                        'platformName': 'Windows 10',
                        'browserName': 'chrome',
                        'browserVersion': 'latest',
                    },
                },
                {
                    browser: "safari",
                    desiredCapabilities: {
                        'project': 'e2e_boilerplate_web',
                        'build': 'Sample',
                        'name': 'Sample Test Safari',
                        "browserName": 'safari',
                        "browserVersion": 'latest',
                        "platformName": 'macOS 10.15',
                    },
                },
            ],
        },
    },
};
