const {Given, Then, When} = require('cucumber');
const {client} = require('nightwatch-api');
const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, '../../../server', '.env'),
});

const getGlobalVar = path => {
  const value = path
    .split('.')
    .reduce((obj, key) => obj === undefined ? undefined : obj[key], client.globals);

  return value !== undefined ? value : path;
};

Given('I am logged in as the demo user', async () => {
  let isAuthenticated = false;

  await client.url(`${client.launchUrl}/Security/login`);

  await client.element('css selector', '#MemberLoginForm_LoginForm_action_logout', function (result) {
    isAuthenticated = result.status === 0;
  });

  if (!isAuthenticated) {
    await client.setValue('#MemberLoginForm_LoginForm_Email', process.env.TL_DEMO_ACCOUNT_USERNAME);
    await client.setValue('#MemberLoginForm_LoginForm_Password', process.env.TL_DEMO_ACCOUNT_PASSWORD);
    await client.submitForm('#MemberLoginForm_LoginForm');
  }

  await client.getText('#MemberLoginForm_LoginForm_error', function (result) {
    this.assert.equal(result.value, "You're logged in as demo.");
  });
});

Given('I navigate to {string}', async string => {
  await client.url(`${client.launchUrl}${getGlobalVar(string)}`);
});

Then('I should see the page title {string}', async string => {
  await client.waitForElementPresent('#page-title');
  await client.getText('#page-title', function (result) {
    this.assert.equal(result.value, getGlobalVar(string));
  });
});

Then('I should see the {string} element', async string => {
  await client.waitForElementPresent(`#${string}`);
});

Then('the {string} table should have a column called {string}', async (string, string2) => {
  await client
    .useXpath()
    .waitForElementPresent(`//table[@id='${string}']/thead/tr/th[contains(text(), '${string2}')]`)
    .useCss();
});

Then('the {string} table should have {string} rows', async (string, string2) => {
  await client.waitForElementPresent(`#${string} tbody tr:nth-of-type(${string2})`);
});

Then('column {string} row {string} of the {string} table should contain {string}', async (string, string2, string3, string4) => {
  await client
    .useXpath()
    .waitForElementPresent(`//table[@id='${string3}']/tbody/tr[${string2}]/td[${string}][contains(text(), '${string4}')]`)
    .useCss();
});
