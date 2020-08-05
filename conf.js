"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
let HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    baseUrl: "http://www.way2automation.com/angularjs-protractor/registeration/#/login",
    directConnect: true,
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
            preserveDirectory: false,
            screenshotsSubfolder: 'screenshots',
            jsonsSubfolder: 'jsons',
            takeScreenShotsForSkippedSpecs: true,
            takeScreenShotsOnlyForFailedSpecs: false,
            docTitle: 'Protractor Test Automation Report',
            docName: 'TestResult.html',
            gatherBrowserLogs: true // Store Browser logs
        }).getJasmine2Reporter());
        let globals = require('protractor');
        let browser = globals.browser;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
    }
};
