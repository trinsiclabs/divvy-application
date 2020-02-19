const execSync = require('child_process').execSync;
const fs = require('fs');
const path = require('path');
const replace = require('replace-in-file');

const dbName = 'app-test';
const envType = 'test';
const baseUrl = 'php-apache';
const dotenvPath = path.join(__dirname, '../server', '.env');
const artifactsPath = path.join(__dirname, '_artifacts');

require('dotenv').config({
  path: dotenvPath,
});

const runner = () => {
  return new Promise((resolve, reject) => {
    try {
      console.log('Updating environment variables...');
      replace.sync({
        files: dotenvPath,
        from:/SS_DATABASE_NAME.*/g,
        to: `SS_DATABASE_NAME="${dbName}"`,
      });

      replace.sync({
        files: dotenvPath,
        from: /SS_ENVIRONMENT_TYPE.*/g,
        to: `SS_ENVIRONMENT_TYPE="${envType}"`,
      });

      replace.sync({
        files: dotenvPath,
        from: /SS_BASE_URL.*/g,
        to: `SS_BASE_URL="${baseUrl}"`,
      });

      // Make sure there's an artifacts directory.
      if (!fs.existsSync(artifactsPath)) {
        console.log('Creating artifacts directory...');
        fs.mkdirSync(artifactsPath);
      }

      console.log('Building database...');
      execSync('../server/vendor/bin/sake dev/build "flush=1"');

      console.log('Populating database...');
      execSync('../server/vendor/bin/sake dev/tasks/DNADesign-Populate-PopulateTask');

      console.log('Creating demo account...');
      execSync('../server/vendor/bin/sake dev/tasks/TrinsicLabs-App-BuildTasks-DemoAccountTask');

      console.log('Running tests...');
      execSync('./node_modules/.bin/cucumber-js --require-module @babel/register --require-module @babel/polyfill tests/e2e/features --require cucumber.conf.js --require tests/e2e/stepDefinitions.js --format json:tests/e2e/_artifacts/report.json', {stdio: 'inherit'});

      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
};

runner()
  .catch((err) => {
    // console.log(err);
  })
  .finally(() => {
    console.log('Resetting environment variables...');
    replace.sync({
      files: dotenvPath,
      from:/SS_DATABASE_NAME.*/g,
      to: `SS_DATABASE_NAME="${process.env.SS_DATABASE_NAME}"`,
    });

    replace.sync({
      files: dotenvPath,
      from: /SS_ENVIRONMENT_TYPE.*/g,
      to: `SS_ENVIRONMENT_TYPE="${process.env.SS_ENVIRONMENT_TYPE}"`,
    });

    replace.sync({
      files: dotenvPath,
      from: /SS_BASE_URL.*/g,
      to: `SS_BASE_URL="${process.env.SS_BASE_URL}"`,
    });
  });
