const path = require("path");
const bunyan = require("bunyan");

global.appRoot = path.resolve(__dirname);

const baseRoot = appRoot.split("node_modules");
const apiName = require(`${baseRoot[0]}package.json`);

module.exports.loggerInstance = bunyan.createLogger({
  name: apiName.name || "centralized-logger",
  serializers: {
    req: require("bunyan-express-serializer"),
    res: bunyan.stdSerializers.res,
    err: bunyan.stdSerializers.err
  },
  level: process.env.LOG_LEVEL || "info"
});

module.exports.logResponse = function(id, body, statusCode) {
  var log = this.loggerInstance.child(
    {
      id: id,
      body: body,
      statusCode: statusCode
    },
    true
  );
  log.info("response");
};
