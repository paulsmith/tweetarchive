basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'pubweb/lib/angular/angular.js',
  'pubweb/lib/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  'pubweb/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
