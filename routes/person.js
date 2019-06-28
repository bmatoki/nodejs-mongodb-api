const express = require('express');
const log = require('../utils/logger');
const cacheUtil = require('../utils/cache.util');
const personService = require('../services/person.service');
const validateUtil = require('../utils/validate.util');

const router = express.Router();

async function getAllPersons(req, res) {
  log.info('person route: GET api/persons/all getAllPersons() Started');
  try {
    const result = await personService.all();
    return res.status(200).json({
      success: true,
      msg: result,
    });
  } catch (error) {
    log.error(`person route: GET api/persons/all getAllPersons() error: ${error}`);
    cacheUtil.incrementErrorCount(error.message || error);
    return res.status(400).json({
      success: false,
      msg: `Error : ${error}`,
    });
  } finally {
    log.info('person route: GET api/persons/all getAllPersons() Ended');
  }
}

async function getPersonById(req, res) {
  log.info('person route: GET api/persons/person/:id getPersonById() Started');
  try {
    if (!validateUtil.validateIfIdExist(req.params.id)) {
      return res.status(400).json({
        success: false,
        msg: 'Cannot get person with empty id',
      });
    }
    const result = await personService.byId(req.params.id);
    return res.status(200).json({
      success: true,
      msg: result,
    });
  } catch (error) {
    log.error(`person route: GET api/persons/person/:id getPersonById() error: ${error}`);
    cacheUtil.incrementErrorCount(error.message || error);
    return res.status(400).json({
      success: false,
      msg: `Error : ${error}`,
    });
  } finally {
    log.info('person route: GET api/persons/person/:id getPersonById() Ended');
  }
}

async function getPersonByName(req, res) {
  log.info('person route: GET api/persons/search/:name getPersonByName() Started');
  try {
    if (!validateUtil.validateSearchValue(req.body)) {
      return res.status(400).json({
        success: false,
        msg: 'Cannot search person with empty firstname',
      });
    }
    const result = await personService.byName(req.body);
    return res.status(200).json({
      success: true,
      msg: result,
    });
  } catch (error) {
    log.error(`person route: GET api/persons/search/:name getPersonByName() error: ${error}`);
    cacheUtil.incrementErrorCount(error.message || error);
    return res.status(400).json({
      success: false,
      msg: `Error : ${error}`,
    });
  } finally {
    log.info('person route: GET api/persons/search/:name getPersonByName() Ended');
  }
}

async function createPerson(req, res) {
  log.info('person route: POST api/persons/create createPerson() Started');
  try {
    if (!validateUtil.validateCreateValue(req.body)) {
      return res.status(400).json({
        success: false,
        msg: 'Cannot create person with empty values',
      });
    }
    const result = await personService.create(req.body);
    return res.status(200).json({
      success: true,
      msg: 'Person created successfully.',
      data: result,
    });
  } catch (error) {
    log.error(`person route: POST api/persons/create createPerson() error: ${error}`);
    cacheUtil.incrementErrorCount(error.message || error);
    return res.status(400).json({
      success: false,
      msg: `Error : ${error}`,
    });
  } finally {
    log.info('person route: POST api/persons/create createPerson() Ended');
  }
}


async function updatePerson(req, res) {
  log.info('person route: PUT api/persons/update updatePerson() Started');
  try {
    if (!validateUtil.validateUpdatePayload(req.body)) {
      return res.status(400).json({
        success: false,
        msg: 'Cannot update person with empty values',
      });
    }
    const result = await personService.update(req.body);
    return res.status(200).json({
      success: true,
      msg: 'user updated successfully.',
      data: result,
    });
  } catch (error) {
    log.error(`person route: PUT api/persons/update updatePerson() error: ${error}`);
    cacheUtil.incrementErrorCount(error.message || error);
    return res.status(400).json({
      success: false,
      msg: `Error : ${error}`,
    });
  } finally {
    log.info('person route: PUT api/persons/update updatePerson() Ended');
  }
}

async function deletePersonByID(req, res) {
  log.info('person route: DELETE api/persons/delete/:id deletePersonByID() Started');
  try {
    if (!validateUtil.validateIfIdExist(req.params.id)) {
      return res.status(400).json({
        success: false,
        msg: 'Cannot delete person with empty id',
      });
    }
    await personService.remove(req.params.id);
    return res.status(200).json({
      success: true,
      msg: 'User has been deleted successfully.',
    });
  } catch (error) {
    log.error(`person route: DELETE api/persons/delete/:id deletePersonByID() error: ${error}`);
    cacheUtil.incrementErrorCount(error.message || error);
    return res.status(400).json({
      success: false,
      msg: `Error : ${error}`,
    });
  } finally {
    log.info('person route: DELETE api/persons/delete/:id deletePersonByID() Ended');
  }
}

// routes
router.get('/all', getAllPersons);
router.get('/person/:id', getPersonById);
router.post('/search', getPersonByName);
router.post('/create', createPerson);
router.put('/update', updatePerson);
router.delete('/delete/:id', deletePersonByID);

module.exports = router;
