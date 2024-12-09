---
title: "Building Expo Apps with EAS: From Local Development to App Store Publishing"
description: "Learn how to create, build, and publish Expo apps using EAS, with a focus on local and production builds."
date: "12/05/2024"
draft: false
---

Creating and publishing a React Native app using Expo and EAS (Expo Application Services) can streamline your development process and simplify app store submissions. This guide will walk you through the steps to create a React Native app, build it locally, and publish it to app stores.

## Step 1: Create App Logo and Name

Before you start coding, it's essential to have a clear vision of your app's branding. Use tools like Midjourney and ChatGPT to brainstorm and design your app's logo and name. These tools can help you generate creative ideas and refine your app's identity.

## Step 2: Create a New Expo App

To create a new Expo app with TypeScript, run the following command:

```bash
npx create-expo-app@latest --template
```

Select the TypeScript template to ensure your app is set up with TypeScript support from the start.

## Step 3: Configure Expo Build

Next, configure your Expo app for building with EAS. Run the following command to set up your build configuration:

```bash
eas build:configure
```

This command will create an `eas.json` file in your project. Update it with the following configuration to define different build profiles:

```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "devSimulator": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "simulator": true
      }
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "autoIncrement": true
    }
  }
}
```

## Step 4: Create Development Build

To create a development build for iOS, use the following command:

```bash
eas build --platform ios --profile development --local
```

Once the build is complete, grab the build file and drop it onto your iOS simulator to test your app locally.

## Step 5: Create a Simulator Build

For development purposes, you can create a simulator build using the `devSimulator` profile. Add the following script to your `package.json`:

```json
"scripts": {
  "build:simulator": "eas build --platform ios --profile devSimulator --local"
}
```

Run the script with:

```bash
npm run build:simulator
```

This will create a build specifically for the iOS simulator, allowing you to test your app in a simulated environment.

## Step 6: Create a Production Build

For production builds, run the following commands for iOS and Android:

```bash
eas build --profile production -p ios --local
eas build --profile production -p android --local
```

These commands will generate production-ready builds for both platforms.

## Step 7: Create the App on Apple Store Connect

Log in to your Apple Developer account and create a new app on Apple Store Connect. Fill in the necessary details, such as app name, description, and category.

## Step 8: Submit the Build to TestFlight with Transporter

To upload your app to TestFlight, use Apple's Transporter app. This tool allows you to upload your app build to TestFlight for testing by your team or external testers.

## Step 9: Create App Assets with Picasso App

Take screenshots of your app and use the [Picasso app](https://apps.apple.com/us/app/picasso-app-store-screenshots/id6472062986) to generate the necessary assets for Apple Store Connect. This includes app icons, screenshots, and other visual elements required for app submission.

## Developer Memberships

To publish your app on the Apple App Store and Google Play Store, you need to have the respective developer memberships:

- **Apple Developer Program**: This membership is required to publish apps on the Apple App Store. It costs $99 per year.
- **Google Play Developer Console**: This membership is required to publish apps on the Google Play Store. It has a one-time registration fee of $25.

## EAS Services

EAS services can be run on the cloud, providing a convenient way to handle builds without local setup. However, these cloud services come at a price. Personally, I prefer to run everything locally for free, which allows for more control over the build process and avoids additional costs.

## Conclusion

By following these steps, you can efficiently create, build, and publish your Expo app using EAS. This process not only simplifies local development and testing but also streamlines the submission of your app to app stores. With the right tools and configuration, you can focus on building a great app experience for your users. Happy coding! 