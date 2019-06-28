module.exports = {
  production: {
    DB_HOST: 'mongodb://localhost',
    DB_PORT: '27017',
    DB_NAME: 'persons',
    logger: {
      morganLevel: 'tiny',
      level: 'warn',
    },
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    },
    mail: {
      smtp: 'smtp.gmail.com',
      ssl: true,
      port: 465,
      username: '',
      password: '',
      techadmin: '',
      errorAlertThershold: 10,
      alertFrequency: '0 0 */1 * * *', // cron syntax sec min hour days etc
    },
  },
  development: {
    DB_HOST: 'mongodb://localhost',
    DB_PORT: '27017',
    DB_NAME: 'persons',
    logger: {
      morganLevel: 'dev',
      level: 'debug',
    },
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    },
    mail: {
      smtp: 'smtp.gmail.com',
      ssl: true,
      port: 465,
      username: '',
      password: '',
      techadmin: '',
      errorAlertThershold: 10,
      alertFrequency: '0 0 */1 * * *', // cron syntax sec min hour days etc
    },
  },
  test: {
    DB_HOST: 'mongodb://localhost',
    DB_PORT: '27017',
    DB_NAME: 'persons',
    logger: {
      morganLevel: 'dev',
      level: 'debug',
    },
    mail: {
      smtp: 'smtp.gmail.com',
      ssl: true,
      port: 465,
      username: '',
      password: '',
      techadmin: '',
      errorAlertThershold: 10,
      alertFrequency: '0 0 */1 * * *', // cron syntax sec min hour days etc
    },
    test: {
      decryptHash: '',
    },
  },
};
