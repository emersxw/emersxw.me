---
title: "Writing NestJS Tests with Jest and TDD: Building Robust Backend Services"
description: "Learn how to write tests for NestJS applications using Jest and TDD, ensuring robust and reliable backend services."
date: "12/05/2024"
draft: false
---

Testing is a crucial part of software development, ensuring that applications are reliable, maintainable, and bug-free. In the world of backend development, NestJS is a popular framework that leverages TypeScript to build efficient and scalable server-side applications. In this article, we'll explore how to write tests for NestJS applications using Jest and Test-Driven Development (TDD) to build robust backend services.

## Why Test-Driven Development (TDD)?

Test-Driven Development (TDD) is a software development approach where tests are written before the actual code. This methodology offers several benefits:

- **Improved Code Quality**: Writing tests first encourages developers to think about the desired behavior and edge cases, leading to cleaner and more reliable code.

- **Faster Debugging**: With tests in place, identifying and fixing bugs becomes quicker and more efficient.

- **Confidence in Refactoring**: TDD provides a safety net for refactoring, ensuring that changes don't introduce new bugs.

## Setting Up NestJS with Jest

NestJS comes with built-in support for Jest, a popular testing framework for JavaScript applications. To get started, ensure you have a NestJS application set up. If not, you can create one using the Nest CLI:

```bash
npm i -g @nestjs/cli
nest new my-nest-app
```

Once your application is set up, Jest is already configured as the default testing framework. You can run tests using:

```bash
npm run test
```

## Writing Your First Test

Let's start by writing a simple test for a service in a NestJS application. Suppose we have a `UserService` with a method `getUserById`.

### Step 1: Define the Test

Create a test file `user.service.spec.ts` in the `src/user` directory:

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a user by ID', async () => {
    const user = { id: 1, name: 'John Doe' };
    jest.spyOn(service, 'getUserById').mockImplementation(async () => user);

    expect(await service.getUserById(1)).toEqual(user);
  });

  it('should return undefined for non-existent user', async () => {
    jest.spyOn(service, 'getUserById').mockImplementation(async () => undefined);

    expect(await service.getUserById(999)).toBeUndefined();
  });

  it('should calculate user age based on birth year', async () => {
    const user = { id: 1, name: 'John Doe', birthYear: 1990 };
    jest.spyOn(service, 'getUserById').mockImplementation(async () => user);

    expect(await service.calculateUserAge(1)).toEqual(new Date().getFullYear() - 1990);
  });
});
```

### Step 2: Implement the Service

Now, implement the `UserService` with the `getUserById` and `calculateUserAge` methods:

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [{ id: 1, name: 'John Doe', birthYear: 1990 }];

  async getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  async addUser(user: { id: number; name: string; birthYear: number }) {
    this.users.push(user);
    return user;
  }

  async calculateUserAge(id: number): Promise<number> {
    const user = await this.getUserById(id);
    if (!user) return null;
    return new Date().getFullYear() - user.birthYear;
  }
}
```

### Understanding the Test

- **Setup with TestingModule**: The `TestingModule` is used to create a testing environment for the service. It allows you to define the providers and compile the module, ensuring that the service is properly instantiated.

- **Mocking with Jest**: Jest's `spyOn` function is used to mock the `getUserById` method, allowing you to define its behavior during the test. This is useful for isolating the unit of work and testing it independently.

- **Assertions**: The `expect` function is used to assert that the service is defined, that the `getUserById` method returns the expected user object or `undefined` for non-existent users, and that the `calculateUserAge` method correctly calculates the user's age.

## Testing Controllers

Testing controllers in NestJS is similar to testing services. Let's write a test for a `UserController` that uses the `UserService`.

### Step 1: Define the Test

Create a test file `user.controller.spec.ts` in the `src/user` directory:

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a user by ID', async () => {
    const user = { id: 1, name: 'John Doe' };
    jest.spyOn(service, 'getUserById').mockImplementation(async () => user);

    expect(await controller.getUserById(1)).toEqual(user);
  });

  it('should add a new user', async () => {
    const newUser = { id: 2, name: 'Jane Doe', birthYear: 1995 };
    jest.spyOn(service, 'addUser').mockImplementation(async () => newUser);

    expect(await controller.addUser(newUser)).toEqual(newUser);
  });

  it('should calculate user age', async () => {
    const user = { id: 1, name: 'John Doe', birthYear: 1990 };
    jest.spyOn(service, 'getUserById').mockImplementation(async () => user);

    expect(await controller.calculateUserAge(1)).toEqual(new Date().getFullYear() - 1990);
  });
});
```

### Step 2: Implement the Controller

Now, implement the `UserController` with the `getUserById`, `addUser`, and `calculateUserAge` methods:

```typescript
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Post()
  async addUser(@Body() user: { id: number; name: string; birthYear: number }) {
    return this.userService.addUser(user);
  }

  @Get(':id/age')
  async calculateUserAge(@Param('id') id: number) {
    return this.userService.calculateUserAge(id);
  }
}
```

### Understanding the Controller Test

- **Controller and Service Integration**: The test ensures that the `UserController` is properly integrated with the `UserService`. By mocking the service's methods, you can test the controller's behavior without relying on the actual service implementation.

- **Route Parameter Handling**: The test verifies that the controller correctly handles route parameters and passes them to the service method.

- **Request Body Handling**: The test checks that the controller correctly processes the request body when adding a new user.

- **Complex Logic Testing**: The test includes a scenario for calculating the user's age, demonstrating how to test more complex logic within the controller.

## The Role of Tests in Iterating on Code

Tests play a vital role in the iterative development process, especially in team environments:

- **Ensuring Functionality**: Tests act as a safety net, ensuring that existing functionality remains intact as new features are added or existing code is refactored. This is crucial for maintaining the stability of the application. When developers know that tests will catch any regressions, they can confidently make changes and improvements to the codebase.

- **Facilitating Collaboration**: In a team setting, tests provide a clear specification of how the code should behave. This makes it easier for team members to understand the intended functionality and collaborate effectively. Tests serve as documentation that explains the expected behavior of the code, reducing misunderstandings and miscommunications.

- **Catching Unintended Changes**: Automated tests can quickly catch unintended changes in functionality, allowing developers to address issues before they reach production. This reduces the risk of introducing bugs and ensures that changes are intentional and well-understood. By running tests frequently, teams can detect and fix issues early in the development cycle.

- **Supporting Continuous Integration**: Tests are integral to continuous integration pipelines, where code is automatically tested and deployed. This ensures that only code that passes all tests is integrated into the main codebase, maintaining high quality and reliability. Continuous integration helps teams deliver features faster and with greater confidence, knowing that the code is thoroughly tested.

## E2E Testing

While unit and integration tests are essential for verifying individual components and their interactions, end-to-end (E2E) testing plays a crucial role in validating the entire application flow. E2E tests simulate real user scenarios, ensuring that the application behaves as expected from start to finish. This type of testing is particularly important for APIs, where multiple services and components interact. But that's another article ;)

## Conclusion

By using Jest and TDD with NestJS, you can ensure that your backend services are robust, reliable, and maintainable. Writing tests first encourages thoughtful design and helps catch bugs early in the development process. As you continue to build and scale your applications, TDD will provide a solid foundation for delivering high-quality software. Happy testing! 