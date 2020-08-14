exports.bossupport={
  backendurl:"http://172.22.161.90:8030/bos/test-data/export"
};

exports.config = {
    output: './output',
    helpers: {
      Puppeteer: {
        url: 'http://120.78.125.187:8888',
        show: true,
        windowSize: '1400x800',
        chrome: {
          // 当windows系统时，让下面这句话有效，而且对用到你自己的chrome目录
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