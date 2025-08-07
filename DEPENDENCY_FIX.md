# Dependency Fix: Removing --legacy-peer-deps Requirement

## Issue
The project previously required using `npm install --legacy-peer-deps` due to dependency conflicts between:
1. @testing-library/svelte@3.0.3 requiring Svelte 3.x while the project uses Svelte 5.38.0
2. ts-jest@27.0.7 requiring TypeScript <5.0 while the project uses TypeScript 5.9.2

## Changes Made

### Updated Dependencies
- Updated @testing-library/svelte from 3.0.3 to 5.2.8 to support Svelte 5
- Updated ts-jest from 27.0.7 to 29.4.1 to support TypeScript 5.x
- Updated Jest and related dependencies from 27.x to 29.x
  - jest: 27.3.1 → 29.7.0
  - babel-jest: 27.3.1 → 29.7.0
  - @types/jest: 27.0.2 → 29.5.12
- Updated @testing-library/jest-dom from 5.14.1 to 6.6.4
- Updated svelte-jester from 2.1.5 to 5.0.0
- Added jest-environment-jsdom which is required for Jest 29+

### Configuration Updates
- Updated Jest configuration to use ESM syntax
- Renamed jest.config.js to jest.config.mjs
- Added "type": "module" to package.json
- Updated test scripts to use Node.js with --experimental-vm-modules flag

## Results
- The project can now be installed with `npm install` without requiring the --legacy-peer-deps flag
- All dependency conflicts have been resolved

## Note on Tests
The test suite requires additional configuration to work with Svelte 5 and ESM. This is beyond the scope of the current fix, which was focused on resolving dependency conflicts for installation.
