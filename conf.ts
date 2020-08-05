import { ProtractorBrowser, Config } from 'protractor';
let HtmlReporter = require('protractor-beautiful-reporter');
export let config: Config = {
    baseUrl:"http://www.way2automation.com/angularjs-protractor/registeration/#/login",
    
  directConnect :true,
  capabilities: {
    'browserName': 'chrome'
    },
  framework: 'jasmine',
  specs: ['./src/specs/**/*.js'],

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 90000,
    isVerbose: true
},
  onPrepare: () => {
    require('ts-node').register({
        compilerOptions: {
            module: 'commonjs'
        },
        disableWarnings: true,
        fast: true,
        project: './tsconfig.json'
    });
   
    jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: 'test-results',
        preserveDirectory: false, // Preserve base directory
        screenshotsSubfolder: 'screenshots',
        jsonsSubfolder: 'jsons', // JSONs Subfolder
        takeScreenShotsForSkippedSpecs: true, // Screenshots for skipped test cases
        takeScreenShotsOnlyForFailedSpecs: false, // Screenshots only for failed test cases
        docTitle: 'Protractor Test Automation Report', // Add title for the html report
        docName: 'TestResult.html', // Change html report file name
        gatherBrowserLogs: true // Store Browser logs
        
    }).getJasmine2Reporter());


   let globals = require('protractor')
   let browser = globals.browser;
   browser.manage().window().maximize();
   browser.manage().timeouts().implicitlyWait(5000);
 }
}