exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '1920x1080',
      chrome: {
        executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
      }
      
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'testcodeceptjs',
  translation: 'zh-CN'
}