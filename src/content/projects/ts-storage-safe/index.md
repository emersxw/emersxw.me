---
title: "ts-storage-safe: Type-Safe localStorage Wrapper"
description: "A TypeScript library providing a robust, type-safe wrapper for localStorage with features like namespacing and custom serialization"
date: "12/01/2024"
draft: false
demoURL: https://www.npmjs.com/package/ts-storage-safe
repoURL: https://github.com/emersxw/ts-storage-safe
---

As a developer, managing client-side storage efficiently and safely is crucial for building robust web applications. The `ts-storage-safe` package was created to provide a more reliable and type-safe way to interact with `localStorage`, offering developers a powerful toolset to enhance their applications.

## The Problem with Traditional localStorage

While `localStorage` is a convenient way to store data on the client side, it comes with several limitations:

- **Lack of Type Safety**: JavaScript's dynamic typing can lead to runtime errors if data is not handled carefully.
- **Key Conflicts**: Without a proper naming convention, keys can easily conflict, especially in larger applications.
- **Serialization Issues**: Storing complex data structures requires manual serialization and deserialization, which can be error-prone.

## Introducing ts-storage-safe

`ts-storage-safe` addresses these challenges by providing a robust solution for client-side storage:

1. **Type Safety**: Leverage TypeScript's type system to ensure data integrity and prevent runtime errors.
2. **Namespacing**: Avoid key conflicts by using prefixes, making it easier to manage storage in large applications.
3. **Custom Serialization**: Implement custom serialization methods to handle complex data structures seamlessly.
4. **Simple API**: Provide an intuitive API for common storage operations, reducing boilerplate code.
5. **Error Handling**: Offer descriptive error messages to help developers quickly identify and fix issues.

## How ts-storage-safe Works

### Designing the API

The library features a simple and intuitive API that covers all common `localStorage` operations while ensuring type safety and flexibility. Developers can easily set, get, check, and remove items with type safety.

### Leveraging TypeScript

TypeScript's powerful type system is utilized to enforce type safety across the library, allowing developers to catch errors at compile time rather than at runtime.

### Implementing Namespacing and Serialization

To address key conflicts and serialization issues, `ts-storage-safe` includes features like namespacing and custom serialization. Developers can define their own serialization methods and use prefixes to organize their storage keys.

### Testing and Optimization

Comprehensive testing ensures the reliability of the library. Extensive tests cover various use cases and edge cases, ensuring that the library behaves as expected in all scenarios. Performance optimization ensures minimal overhead to applications.

### Publishing and Documentation

The package is available on npm, with detailed documentation to help developers get started quickly. The documentation includes examples and explanations of all features, making it easy for developers to integrate `ts-storage-safe` into their projects.

## Key Features

### Type Safety

With full TypeScript support, `ts-storage-safe` ensures that your data is stored and retrieved with the correct types, reducing the risk of runtime errors.

### Namespaced Storage

Create isolated storage instances with prefixes to avoid key conflicts.

### Custom Serialization

Implement custom serialization for special use cases.

## Coding Examples

### Basic Usage

```typescript
import { storage } from 'ts-storage-safe';

// Store data with type safety
interface User {
  name: string;
  age: number;
}

storage.set<User>('user', { name: 'John', age: 30 });

// Retrieve data with type inference
const user = storage.get<User>('user');
console.log(user?.name); // John

// Check if key exists
if (storage.has('user')) {
  // Key exists
}

// Remove specific item
storage.remove('user');

// Clear all items
storage.clear();
```

### Namespaced Storage

```typescript
import { createStorage } from 'ts-storage-safe';

// Create namespaced storage instances
const userStorage = createStorage({ prefix: 'user' });
const appStorage = createStorage({ prefix: 'app' });

// Each storage instance has its own namespace
userStorage.set('theme', 'dark');     // Stored as 'user:theme'
appStorage.set('theme', 'light');     // Stored as 'app:theme'

// Clear only items in a specific namespace
userStorage.clear();  // Only clears items prefixed with 'user:'
```

### Custom Serialization

```typescript
import { createStorage } from 'ts-storage-safe';

// Example: Base64 serialization
const secureStorage = createStorage({
  serializer: {
    stringify: <T>(value: T): string => {
      const jsonString = JSON.stringify(value);
      return Buffer.from(jsonString).toString('base64');
    },
    parse: <T>(value: string): T => {
      const jsonString = Buffer.from(value, 'base64').toString();
      return JSON.parse(jsonString);
    }
  }
});

// Data will be stored in base64 format
secureStorage.set('secret', { apiKey: '12345' });