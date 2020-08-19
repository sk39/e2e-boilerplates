let env = process.env.NODE_ENV;
if (!env || env.length === 0) {
    env = "local"
}

module.exports = require(`./codecept.conf.${env}.js`).config
