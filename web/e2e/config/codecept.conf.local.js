const env = require("../scripts/env")
exports.config = {
    helpers: {
        Puppeteer: {
            url: env.TARGET_URL,
            show: false,
            windowSize: '1200x900'
        },
    },
};
