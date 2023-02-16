const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ntk7rc',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.ts'
  },
});
