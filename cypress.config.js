const { defineConfig } = require("cypress");

//module.exports = defineConfig({
//  e2e: {
//    setupNodeEvents(on, config) {
      // implement node event listeners here
//    },
//  },
//});

//PS mio nuevo

module.exports = defineConfig({
 // reporter: 'cypress-mochawesome-reporter'
 // ,"reporterOptions": {
 // reportDir: 'cypress/reports',
 //  "html": true,
 //  "json": true
 //}
 //,
 

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});