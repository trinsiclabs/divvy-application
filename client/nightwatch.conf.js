const CONSTANTS = require('./constants');

module.exports = {
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: '/usr/bin/chromedriver',
        port: 4444,
        cli_args: [
          '--port=4444',
        ],
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: [
            'disable-background-networking',
            'disable-default-apps',
            'disable-extensions',
            'disable-gpu',
            'disable-sync',
            'disable-translate',
            'headless',
            'hide-scrollbars',
            'metrics-recording-only',
            'mute-audio',
            'no-first-run',
            'no-sandbox',
            'safebrowsing-disable-auto-update',
          ],
        },
      },
      screenshots: {
        enabled: true,
        path: 'tests/e2e/_artifacts',
      },
      launch_url: 'http://php-apache',
      globals: {
        PAGES: CONSTANTS.PAGES,
      },
    },
  },
};
