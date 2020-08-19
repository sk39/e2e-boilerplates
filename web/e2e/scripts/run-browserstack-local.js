const browserstack = require('browserstack-local');
const env = require("./env");
const {run} = require("runjs");

const bs_local = new browserstack.Local();
const bs_local_args = {
    key: env.ACCESS_KEY,
    forceLocal: env.LOCAL,
    proxyHost: env.proxy ? env.proxy.host : null,
    proxyPort: env.proxy ? env.proxy.port : null,
};

const start =  (callback) => {
    console.log("start...", bs_local_args)
    bs_local.start(bs_local_args, (err) => {
        if (err) {
            console.error("Failed start BrowserStackLocal", err);
            return;
        }
        console.log("Started BrowserStackLocal");
        callback && callback();
    });
}

const stop = async (callback) => {
    // TODO:下記は動作しない？
    // bs_local.stop(() => {
    //     console.log("Stopped BrowserStackLocal");
    //     callback && callback();
    // });

    run("npx kill-port 45690");
    callback && callback();
}

const cmd = process.argv.pop();
switch (cmd) {
    case "start":
        start();
        break;
    case "stop":
        stop();
        break;
    case "restart":
        stop(start);
        break;
    case "check":
        console.log(bs_local.isRunning());
        break;
    default:
        console.error(`Unknown command type. cmd=${cmd}`);
        break;
}

