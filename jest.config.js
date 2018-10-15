module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**.js'],
  coveragePathIgnorePatterns: ['<rootDir>/src/.next'],
  setupFiles: ['<rootDir>/test/setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
