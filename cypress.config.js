const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:5500/java-project/toDoList',
    experimentalSessionAndStorageBehavior: true,
    testIsolation: true,
    defaultCommandTimeout: 10000,
    localStorage: false
  },
})