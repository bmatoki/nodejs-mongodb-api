const Person = require('../schemas/person.schema');
const log = require('../utils/logger');

module.exports = {
  // get all persons
  all: () => {
    log.info('person.service: function all() called');
    return Person.find({});
  },
  // create new person
  create: (payload) => {
    log.info('person.service: function create() called');
    const person = new Person(payload);
    return person.save();
  },
  // find person by ID
  byId: (id) => {
    log.info('person.service: function byId() called');
    return Person.findById({ _id: id });
  },
  // remove by id
  remove: (id) => {
    log.info('person.service: function remove() called');
    return Person.deleteOne({ _id: id });
  },
  // update by id
  update: (payload) => {
    log.info('person.service: function update() called');
    return Person.updateOne({ _id: payload.id }, payload);
  },
  // search by name
  byName: (payload) => {
    log.info('person.service: function byName() called');
    return Person.find({
      firstname: {
        $regex: payload.firstname,
      },
    });
  },
};
