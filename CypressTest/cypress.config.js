const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'cypress-report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    debug: true
  },
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on) 
      {
       on('task', {
          logger(message) {
            console.log(message)
            return null
          }
        })
      }
      const environmentName = config.env.configFile || 'qa'
      const environmentFilename = `./cypress/config/${environmentName}.json`
      const settings = require(environmentFilename)
      if (settings.baseUrl) {
        config.baseUrl = settings.baseUrl
      }
      if (settings.env) {
        config.env = {
          ...config.env,
          ...settings.env,
        }
      }
      return config
    },
    env: {
      configFile: "uat",
      auth0_tokenURL : process.env.tokenURL,
      auth0_clientId : process.env.clientId,
      auth0_clientSecret : process.env.clientSecret,
      auth0_apiURL : process.env.apiURL      
    },
    "chromeWebSecurity": true,
    "defaultCommandTimeout": 30000,
    "requestTimeout": 30000,
    "responseTimeout": 30000,
    "numTestsKeptInMemory": 0    
  },
  viewportWidth: 1366,
  viewportHeight: 768,
  
});