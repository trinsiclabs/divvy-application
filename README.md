# Divvy client application

Primary user interface (UI) for interacting with the network.

## Getting started

The front-end of the app uses [React](https://reactjs.org/) and
communicates with the [Silverstripe](https://www.silverstripe.org/)
back-end via [GraphQL](https://graphql.org/).

UI components are provided by [Material UI](https://material-ui.com/)

There three containers which make up the client application:

1. Apache / PHP
2. MySQL
3. Mailcatcher (dev only)

Before going any further make sure you have set up the host VM as described in
the [platform docs](https://github.com/flashbackzoo/divvy).

### Set up the domain name

First login to the host VM:

```
$ vagrant ssh
```

Print and copy the host IP address:

```
$ hostname -I
```

Add the following line to your local (*not* the host VM) hosts file:

```
HOST_VM_IP_ADDRESS divvy.local
```

This lets you access the application on `http://divvy.local` in your browser.

### Start the containers

From the host VM:

```
$ cd /home/vagrant/application
$ sudo docker-compose up -d
```

### Define environment variables

From the host VM, create `/home/vagrant/application/server` with
the following variables:

```
SS_DATABASE_CLASS='MySQLPDODatabase'
SS_DATABASE_SERVER='db.app.divvy.com'
SS_DATABASE_USERNAME='root'
SS_DATABASE_PASSWORD='secret'
SS_DATABASE_NAME='app'
SS_BASE_URL='http://divvy.local'
SS_SEND_ALL_EMAILS_FROM='mail@divvy.local'
SS_DEFAULT_ADMIN_USERNAME='admin'
SS_DEFAULT_ADMIN_PASSWORD='admin'
SS_ENVIRONMENT_TYPE='live'
SES_HOST=''
SES_USERNAME=''
SES_PASSWORD=''
DIVVY_API_SERVER='http://api.divvy.com:3000'
```

Environment variables are loaded into the application in
`includes/constants.php`. When adding new environment variables, this file
must be updated.

### Install the dependencies

#### Server

From the host VM:

```
$ cd /home/vagrant/application/server
$ composer install
```

#### Client

From the host VM:

```
$ cd /home/vagrant/application/client
$ nvm use
$ npm install
```

Scripts for building the front-end are in `/var/app/client/package.json`

For development run:

```
$ npm run start`
```

For a production build run:

```
$ npm run build
```

### Using the app

Once you've started the local services, installed the dependencies, and
defined the environment variables, build the database by visiting
`http://divvy.local/dev/build` in your browser.

By default this will be running the production build. You need to change
`SS_ENVIRONMENT_TYPE` in `.env` from `live` to `dev` for development.
Then you can start the Webpack dev server and see your changes
in the browser:

```
$ cd /home/vagrant/application/client
$ npm run start
```

#### GraphQL

There's some tooling for testing out GraphQL queries at:

```
http://divvy.local/dev/graphiql/
```

### Running the tests

Test suites for the front-end and back-end can be run from the CLI container.

#### Back-end tests

These test suites are run from the `server` directory:

```
$ vendor/bin/phpunit app/tests/
```

#### Front-end tests

These test suites are run from the `client` directory:

```
$ npm run test:e2e
```

If you force the tests to exit early with `Ctrl+C` your `.env` will be messed
up and you'll have to manually reset these values:

```
SS_DATABASE_NAME
SS_ENVIRONMENT_TYPE
```

### Mailcatcher

Mailcatcher is available on `http://divvy.local:1080`

This will be used in `dev` and `test` environments.
See `server/app/_config/email.yml` for more details.
