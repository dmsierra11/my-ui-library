module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy'
    },
    testEnvironment: 'jsdom'
};

