const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
  },
  fixturesFolder: false,
  video: false,
})

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  video: false,
})


