const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ntk7rc',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: 'true',
    reportPageTitle: 'Cypress Automation Report',
    reportFilename: '[status]_[datetime]_[name]_report',
    reportDir: 'reports/automation',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
    timestamp: "longDate"
  },
  e2e: {
    // baseUrl: 'some base url',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: '**/*-test.ts',
    testIsolation: false
  },
  defaultCommandTimeout: 10000,
  viewportHeight: 1057,
  viewportWidth: 1920
});
