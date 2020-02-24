# Divvy client application

Primary user interface (UI) for interacting with the network.

## Getting started

The front-end of the app uses [React](https://reactjs.org/) and
communicates with the [Silverstripe](https://www.silverstripe.org/)
back-end via [GraphQL](https://graphql.org/).

UI components are provided by [Material UI](https://material-ui.com/)

There are a few containers which make up the client application:

1. Apache / PHP
2. Postgres
3. Mailcatcher (dev only)
4. CLI

### Configuration

First login to the host VM:

```
$ vagrant ssh
```

Print and paste the host IP address:

```
$ hostname -I
```

Add the following line to your hosts file so the application can be accessed on
the `divvy.local` hostname.

```
HOST_VM_IP_ADDRESS divvy.local
```

Development tools (composer, Node.js etc) are provided by the CLI container.
In a new terminal window, log into the container, from the host VM:

```
$ sudo docker exec -it cli.app.divvy.com /bin/ash
```

You should see two directories:

```
$ ls

client
server
```

These volumes map to the `client` and `server` directories in the application
root and contain the front-end and back-end of the app respectively.

The CLI container has all the tools you need to build the app. Start by
installing the PHP dependencies from the `server` directory:

```
$ composer install
```

From the `client` directory, install the JavaScript dependencies:

```
$ npm install
```

Scripts for building the front-end are in `client/package.json`

For development, run `$ npm run start`

For a production build, run `$ npm run build`

#### Environment variables

Create a `server/.env` file with the following variables:

```
SS_DATABASE_CLASS='MySQLPDODatabase'
SS_DATABASE_SERVER='db.app.divvy.com'
SS_DATABASE_USERNAME='postgres'
SS_DATABASE_PASSWORD='secret'
SS_DATABASE_NAME='app'
SS_BASE_URL='http://divvy.local'
SS_SEND_ALL_EMAILS_FROM='mail@divvy.local'
SS_DEFAULT_ADMIN_USERNAME='admin'
SS_DEFAULT_ADMIN_PASSWORD='admin'
SS_ENVIRONMENT_TYPE='dev'
SES_HOST=''
SES_USERNAME=''
SES_PASSWORD=''
```

Environment variables are loaded into the application in
`includes/constants.php`. When adding new environment variables, this file
must be updated.

### Using the app

Once you've started the local services, installed the dependencies, and
defined the environment variables, build the database by visiting
`http://divvy.local/dev/build` in your browser.

When the app is in dev more (see the `.env` file) you will also need to run the
Webpack dev server. From the CLI container:

```
$ cd client
$ npm run start
```

### GraphQL

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
