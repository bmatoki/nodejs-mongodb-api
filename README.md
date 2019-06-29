# nodejs-mongodb-simple-api
this is simple crud operations for mongodb using mongoose.

in case you need to add a relation (ObjectID) add to your schema:

```
 user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'user is required']
    }
```

and don't forget to populate.
example :

```
schema.find({}).populate('users');
```


## Getting Started

In order to install the application clone the repo.

Open cmd at project root and type
```
npm i
node app
or
docker-compose up

```


### Prerequisites

```
* Node
* mongodb \ docker.

```

### Dev Installing

**Setting up a deveplopment env**

Clone this repo.
```
git clone https://github.com/bmatoki/nodejs-mongodb-api.git
```

Install the node dependencies for each service.

```
npm i 

```


### Running the tests

The tests are mocha and chai based and needs a working dev environment.
Currently only the node apps contains unit and e2e testing.

Before running the test, the test config env needs to be updated with the relevant dev/prod details.
The config file can be found at config.js

```
config.json file:

{
  production: {....},
  test: {
    cors: {
      origin: '*',
      methods: 'GET,POST',
    },
    logger: {
      morganLevel: 'debug',
      level: 'info',
    },
  }
  development: {....}
}

```
To run the tests.

```
npm run test

```



### coding style 

Each code addition must be in line with the eslint and tslint in the project.
Those extend the airbnb style guide.

## Deployment

To install a production ready application you can follow the [Dev Installing](#dev-installing) after installing/validating Prerequisites are met.

## Uninstalling

Uninstall steps:
 * node - simply delete the files.
 * docker - stop the containers.
 * mongodb - stop mongodb service delete db.


## Built With

* Node.
* mongodb
* docker
* pm2.


## Authors

* Boaz Matoki
