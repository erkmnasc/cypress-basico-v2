const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1024,
  viewportWidth: 1280,
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
  },
})
