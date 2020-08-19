const env = require('@sk39/dotenv-ex').config()

const httpProxy = process.env.HTTP_PROXY;
let proxy = null;
if (httpProxy && httpProxy.length > 0) {
    const proxyMatched = httpProxy.match(new RegExp("https?://(.+):([0-9]+)"));
    proxy = {
        url: httpProxy,
        host: proxyMatched[1],
        port: proxyMatched[2]
    }
}

module.exports = Object.assign({}, env, {proxy});
