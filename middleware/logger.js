import log4js from "log4js";
log4js.configure({
  appenders: {
    out: {
      type: "stdout",
      layout: {
        type: "colored",
        // pattern: "[%d] [%p] %m"
      },
      file: {
        type: "file",
        filename: "logs/app.log"
      }
    },
  },
  categories: {
    default: {
      appenders: ["out"],
      level: "debug"
    }
  }
})
const logger = log4js.getLogger('default');
/**
 *
 * @param req
 * @param res
 * @param next
 * @constructor
 */
const LoggerMiddleware = (req, res, next) => {
  logger.debug(`[${req.method}] ${req.url}`);
  next();
};

export default LoggerMiddleware;
