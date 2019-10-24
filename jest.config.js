const { defaults } = require('jest-config');

module.exports = {
    verbose: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx', 'png'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!next/)'],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js"
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    clearMocks: true
};