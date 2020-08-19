const env = require("./env");
const {run} = require("runjs");

const is_windows = process.platform === 'win32'
const is_mac = process.platform === 'darwin'
const is_linux = process.platform === 'linux'

if (is_windows) {
    console.error(`Windows is not yet supported. platform=${process.platform}`);
} else if (is_mac) {
    console.log("start...")
    run(`scripts/sc-4.6.2-osx/bin/sc -u ${env.USERNAME} -k ${env.ACCESS_KEY}`)
} else if (is_linux) {
    console.error(`Linux is not yet supported. platform=${process.platform}`);
} else {
    console.error(`Unknown platform. platform=${process.platform}`);
}
