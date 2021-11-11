
// import { pathsToModuleNameMapper } from 'ts-jest/utils';
// // const pathsToModuleNameMapper = (...args) => import('ts-jest/utils').then(({default: pathsToModuleNameMapper}) => pathsToModuleNameMapper(...args));
// // const { pathsToModuleNameMapper } = require('ts-jest/utils');
// import { compilerOptions } from './tsconfig';
// // const { compilerOptions } = require('./tsconfig');



// export const preset = 'jest-preset-angular';
// export const roots = ['<rootDir>/src/'];
// export const testMatch = ['**/+(*.)+(spec).+(ts)'];
// export const setupFilesAfterEnv = ['<rootDir>/src/test.ts'];
// export const collectCoverage = true;
// export const coverageReporters = ['html'];
// export const coverageDirectory = 'coverage';
// export const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths || {}, {
//     prefix: '<rootDir>/',
// });


// require('jest-preset-angular/ngcc-jest-processor');
// const { pathsToModuleNameMapper } = require('ts-jest/utils');
// const { paths } = require('./tsconfig.json').compilerOptions;

// /** @type {import('@jest/types').Config.InitialOptions} */
// module.exports = {
//     preset: 'jest-preset-angular',
//     moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: '<rootDir>' }),
//     setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
// };

// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


module.exports = {
    preset: 'jest-preset-angular',
    moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    // roots: ['<rootDir>/src/'],
    // testMatch: ['**/+(*.)+(spec).+(ts)'],
    // collectCoverage: true,
    // coverageReporters: ['html'],
    // coverageDirectory: 'coverage'
};
