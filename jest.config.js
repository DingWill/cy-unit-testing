module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    // 将.js/ts后缀的文件使用babel-jest处理
    '^.+\\.(js|ts)': 'babel-jest'
  },
  testMatch: ['<rootDir>/test/*.(spec|test).(js|ts)'],
  collectCoverageFrom: ['test/*.{js,ts}'] //测试覆盖率的范围
}
