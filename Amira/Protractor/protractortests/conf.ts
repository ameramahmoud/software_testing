
// To run this, first transpile it to javascript with `npm run tsc`,
// then run `protractor conf.js`.
// eslint-disable-next-line no-unused-vars
import { Config, browser } from 'protractor'
//import { SpecReporter } from 'jasmine-spec-reporter'

export const config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['./specs/testsLogin.js','./specs/testsSignup.js','./specs/testsForgotPassword.js'],

  
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true,

  onPrepare: () => {
   //jasmine.getEnv().addReporter((new SpecReporter({ spec: { displayStacktrace: true } })))
    var AllureReporter = require('jasmine-allure-reporter')
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }))
    browser.manage().window().setSize(1366, 768)
    browser.manage().timeouts().implicitlyWait(10000)
    browser.waitForAngularEnabled(false)
    browser.ignoreSynchronization = true
  }

}
