# Centralized logger v1.0.5

Centralized logger for API development with NodeJs and ExpressJs, based on [bunyan](https://www.npmjs.com/package/bunyan) & [bunyan-express-serializer](https://www.npmjs.com/package/bunyan-express-serializer)

## Installation

Using npm

In your project folder

```sh
$ npm i centralized-logger
```

## Important

Define the environment variables to set the API name and the log level.

example:

Linux =) or MacOS ¬¬

```sh
$ export LOG_LEVEL=info
```

Windows =(

```sh
$ set LOG_LEVEL=info
```

By default they are set as NAME_API=centralized-logger, LOG_LEVEL=info

In nodeJs

In your server file ex. app.js, index.js, server.js, etc...

```
const log = require("centralized-logger").loggerInstance;
log.info("hi info");
log.error("hi error");
```

To capture, manage and log all request

```
const app = express();
require("centralized-logger/instanceLog").capture(app);
```
