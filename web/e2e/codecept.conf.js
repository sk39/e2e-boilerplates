const envConf = require("./config/envConf")
const {setHeadlessWhen} = require('@codeceptjs/configure');
setHeadlessWhen(process.env.HEADLESS);

exports.config = Object.assign({
    tests: './tests/**/*_test.js',
    output: './output',
    helpers: {},
    include: {
        I: './steps_file.js'
    },
    bootstrap: null,
    mocha: {},
    name: 'e2e_boilerplate_web',
    plugins: {
        retryFailedStep: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        }
    }
}, envConf);
