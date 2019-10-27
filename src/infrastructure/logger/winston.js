const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'orca-service' },
  transports: [
    new winston.transports.File({ filename: `${process.cwd()}/log/error.log`, level: 'error' }),
    new winston.transports.File({ filename: `${process.cwd()}/log/combined.log` })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

module.exports = logger;