const log = require('./logger');

function validateCreateValue(payload) {
  if (!payload || !payload.firstname || !payload.lastname) {
    log.info('validate.util: function  validateCreateValue() empty payload return false');
    return false;
  }
  log.info('validate.util: function  validateCreateValue() good payload return true');
  return true;
}

function validateUpdatePayload(payload) {
  if (!payload || !payload.firstname || !payload.lastname || !payload.id) {
    log.info('validate.util: function  validateUpdatePayload() empty payload return false');
    return false;
  }
  log.info('validate.util: function  validateUpdatePayload() good payload return true');
  return true;
}

function validateSearchValue(payload) {
  if (!payload || !payload.firstname) {
    log.info('validate.util: function  validateSearchValue() empty payload return false');
    return false;
  }
  log.info('validate.util: function  validateSearchValue() good payload return true');
  return true;
}

function validateIfIdExist(id) {
  if (!id) {
    log.info('validate.util: function  validateIfIdExist() empty payload return false');
    return false;
  }
  log.info('validate.util: function validateIfIdExist() good payload return true');
  return true;
}

module.exports = {
  validateCreateValue,
  validateUpdatePayload,
  validateSearchValue,
  validateIfIdExist,
};
