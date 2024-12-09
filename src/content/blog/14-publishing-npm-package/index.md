---
title: "Publishing an NPM Package: A Step-by-Step Guide with TypeScript"
description: "Learn how to create and publish your own npm package using TypeScript, complete with examples and best practices."
date: "10/25/2023"
draft: false
---

Publishing an npm package can be a rewarding experience, allowing you to share your code with the world and contribute to the open-source community. In this guide, we'll walk through the process of creating and publishing a package using TypeScript.

## Step 1: Setting Up Your Project

First, create a new directory for your package and initialize it with npm:

```bash
mkdir my-awesome-package
cd my-awesome-package
npm init -y
```

This will create a `package.json` file with default settings. You can edit this file to add more details about your package, such as the name, version, description, and author.

## Step 2: Adding TypeScript

To use TypeScript, you'll need to install it along with the necessary type definitions:

```bash
npm install typescript --save-dev
npm install @types/node --save-dev
```

Next, create a `tsconfig.json` file to configure TypeScript:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "declaration": true,
    "outDir": "./dist",
    "strict": true
  },
  "include": ["src/**/*"]
}
```

## Step 3: Writing Your Code

Create a `src` directory and add your TypeScript code. For example, let's create a simple utility function:

```typescript
// src/index.ts
export function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

## Step 4: Compiling TypeScript

Compile your TypeScript code to JavaScript using the TypeScript compiler:

```bash
npx tsc
```

This will generate JavaScript files in the `dist` directory, as specified in the `tsconfig.json`.

## Step 5: Testing Your Package

Testing is crucial to ensure your package works as expected. You can use a testing framework like Jest to write and run tests. First, install Jest:

```bash
npm install jest @types/jest ts-jest --save-dev
```

Configure Jest by creating a `jest.config.js` file:

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

Write a test for your function in a `tests` directory:

```typescript
// tests/index.test.ts
import { greet } from '../src';

test('greet function', () => {
  expect(greet('World')).toBe('Hello, World!');
});
```

Run your tests using:

```bash
npx jest
```

## Step 6: Preparing for Publishing

Before publishing, ensure your `package.json` is correctly configured. Make sure the `main` field points to the compiled JavaScript file:

```json
"main": "dist/index.js",
```

Also, add a `files` field to specify which files should be included in the package:

```json
"files": [
  "dist/**/*"
],
```

## Step 7: Versioning Your Package

Versioning is important for communicating changes in your package. Follow semantic versioning (semver) to manage your package versions. Update the `version` field in `package.json` according to the changes:

- **MAJOR** version when you make incompatible API changes,
- **MINOR** version when you add functionality in a backwards-compatible manner, and
- **PATCH** version when you make backwards-compatible bug fixes.

## Step 8: Publishing to NPM

First, log in to your npm account:

```bash
npm login
```

Then, publish your package:

```bash
npm publish
```

If your package name is already taken, you may need to choose a different name or scope it under your username or organization.

## Step 9: Using Your Package

Once published, you can install and use your package in other projects:

```bash
npm install my-awesome-package
```

And use it in your code:

```typescript
import { greet } from 'my-awesome-package';

console.log(greet('World'));
```

## Best Practices

- **Versioning**: Follow semantic versioning (semver) to communicate changes in your package.
- **Documentation**: Provide clear documentation and examples to help others use your package.
- **Testing**: Write tests to ensure your package works as expected and to prevent regressions.

## Conclusion

Publishing an npm package is a great way to share your work and contribute to the community. By following these steps and best practices, you can create a well-structured and useful package that others can benefit from. Happy coding! 