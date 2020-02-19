# Divvy client application

Primary user interface (UI) for interacting with the network.

## Getting started

The front-end of the app uses [React](https://reactjs.org/) and
communicates with the [Silverstripe](https://www.silverstripe.org/)
back-end via [GraphQL](https://graphql.org/).

UI components are provided by [Material UI](https://material-ui.com/)

There are a few containers which make up the client application:

1. Apache / PHP
2. Mariadb
3. Mailcatcher (dev only)
4. CLI

Development tools (composer, Node.js etc) are provided by the CLI container.
In a new terminal window, log into the container:

```
$ docker exec -it cli.app.divvy.com /bin/ash
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

### Environment variables

Create a `server/.env` file with the following variables:

```
SS_DATABASE_CLASS='MySQLPDODatabase'
SS_DATABASE_SERVER='db.app.divvy.com'
SS_DATABASE_USERNAME='root'
SS_DATABASE_NAME='app'
SS_BASE_URL='http://localhost'
SS_SEND_ALL_EMAILS_FROM='mail@localhost'
SS_DEFAULT_ADMIN_USERNAME='admin'
SS_DEFAULT_ADMIN_PASSWORD='admin'
SS_ENVIRONMENT_TYPE='dev'
SES_HOST=''
SES_USERNAME=''
SES_PASSWORD=''
TL_DEMO_ACCOUNT_USERNAME='demo@localhost'
TL_DEMO_ACCOUNT_PASSWORD='Password123!'
```

Environment variables are loaded into the application in
`includes/constants.php`. When adding new environment variables, this file
must be updated.

### Using the app

Once you've started the local services, installed the dependencies, and
defined the environment variables, build the database by visiting
`http://localhost/dev/build` in your browser.

It's useful to populate some test data when developing the app. The following
build tasks do that for you.

```
http://localhost/dev/tasks/DNADesign-Populate-PopulateTask
http://localhost/dev/tasks/TrinsicLabs-App-BuildTasks-DemoAccountTask
```

These can also be run from the CLI container using the
[SilverStripe CLI](https://docs.silverstripe.org/en/4/developer_guides/cli/#sake-silverstripe-make)

#### GraphQL

There's some tooling for testing out GraphQL queries at:

```
http://localhost/dev/graphiql/
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

Mailcatcher is available on `http://localhost:1080`

This will be used in `dev` and `test` environments.
See `server/app/_config/email.yml` for more details.
