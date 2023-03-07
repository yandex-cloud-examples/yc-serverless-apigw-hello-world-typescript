import path from 'path';

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    collectCoverage: true,
    coverageDirectory: '../coverage',
    coverageProvider: 'v8',
    moduleFileExtensions: [
        'js',
        'ts',
    ],
    preset: 'ts-jest',
    rootDir: path.resolve('./src/'),
    transform: {
        '^.+\\.[tj]s$': 'ts-jest',
    },
    transformIgnorePatterns: [
        'node_modules/(?!(node-fetch|fetch-blob)/.*)',
    ],
};
