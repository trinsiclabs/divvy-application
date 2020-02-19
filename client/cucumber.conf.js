const {After, AfterAll, BeforeAll, setDefaultTimeout} = require('cucumber');
const fs = require('fs');
const {createSession, closeSession, startWebDriver, stopWebDriver} = require('nightwatch-api');
const path = require('path');
const reporter = require('cucumber-html-reporter');

const artifactsFolder = path.resolve(__dirname, 'tests/e2e/_artifacts');
const attachedScreenshots = getScreenshots();

function getScreenshots() {
  let screenshots = [];

  try {
    screenshots = fs
      .readdirSync(artifactsFolder)
      .map(file => path.resolve(artifactsFolder, file));
  } catch (err) {
  }

  return screenshots;
}

setDefaultTimeout(60000);

BeforeAll(async () => {
  await startWebDriver({env: process.env.NIGHTWATCH_ENV || 'default'});
  await createSession();
});

AfterAll(async () => {
  await closeSession();
  await stopWebDriver();

  setTimeout(() => {
    reporter.generate({
      theme: 'bootstrap',
      jsonFile: path.resolve(artifactsFolder, 'report.json'),
      output: path.resolve(artifactsFolder, 'report.html'),
      reportSuiteAsScenarios: true,
    });
  }, 0);
});

After(function () {
  return Promise.all(
    getScreenshots()
      .filter(file => !attachedScreenshots.includes(file))
      .map(file => {
        attachedScreenshots.push(file);
        return this.attach(fs.readFileSync(file), 'image/png');
      })
  );
});
