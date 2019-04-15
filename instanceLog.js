const logger = require("./index");

module.exports.capture = function(app) {
  app.use((req, res, next) => {
    let log = logger.loggerInstance.child(
      {
        id: req.id,
        body: req.body
      },
      true
    );
    req.path === "/check"
      ? log.debug({
          req: req
        })
      : log.info({
          req: req
        });
    next();
  });

  app.use(function(req, res, next) {
    function afterResponse() {
      res.removeListener("finish", afterResponse);
      res.removeListener("close", afterResponse);
      let log = logger.loggerInstance.child(
        {
          id: req.id
        },
        true
      );

      req.baseUrl === "/check"
        ? log.debug({ res: res }, "response")
        : log.info({ res: res }, "response");
    }

    res.on("finish", afterResponse);
    res.on("close", afterResponse);
    next();
  });
};
