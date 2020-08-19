const env = require("../scripts/env")
exports.config = {
    helpers: {
        WebDriver: {
            host: 'hub.browserstack.com',
            path: '/wd/hub',
            url: env.TARGET_URL,
            user: env.USERNAME,
            key: env.ACCESS_KEY,
            browser: 'chrome',
            desiredCapabilities: {}
        },
        BrowserstackHelper: {
            "require": "codeceptjs-bshelper",
            "user": env.USERNAME,
            "key": env.ACCESS_KEY,
            "shortUrl": true
        }
    },
    // For parallel execution
    multiple: {
        bs: {
            browsers: [
                {
                    browser: "Chrome",
                    desiredCapabilities: {
                        'project': 'e2e_boilerplate_web',
                        'build': 'Sample',
                        'name': 'Sample Test Chrome',
                        'os': 'Windows',
                        'os_version': '10',
                        'browserName': 'Chrome',
                        'browser_version': '81',
                        'browserstack.local': 'true',
                        'browserstack.networkLogs': 'true',
                        'browserstack.user': env.USERNAME,
                        'browserstack.key': env.ACCESS_KEY,
                    },
                },

                {
                    browser: "IE",
                    desiredCapabilities: {
                        'project': 'e2e_boilerplate_web',
                        'build': 'Sample',
                        'name': 'Sample Test IE',
                        "os": "Windows",
                        "os_version": "10",
                        "browserName": "IE",
                        "browser_version": "11.0",
                        "browserstack.local": "true",
                        "browserstack.networkLogs": "true",
                        "browserstack.selenium_version": "3.5.2",
                        'browserstack.user': env.USERNAME,
                        'browserstack.key': env.ACCESS_KEY,
                    },
                },
            ],
        },
    },
};
