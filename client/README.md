# SiberSim

## Fixing Guide:

Error encountered:

> Error loading route "./(drawer)/\_layout.tsx" ReferenceError: requestAnimationFrame is not defined

Run this command:

    git apply --ignore-whitespace patches/react-native-reanimated+3.3.0.patch

## Running Dev-Client:

You may already noticed... or maybe not yet, but Expo Go doesn't really support all kind of native libraries and stuffs...
Yet, that's doesn't mean Expo doesn't support it, simply follow the guides below will do.

### Install the Dev-Client:

Firstly, install the expo-dev-client using npm(preferred) or yarn:

    npx expo install expo-dev-client

then, perform the steps below.

### Installation Guide for Android:

Prebuild android files with the command below:

    npx expo prebuild --platform android

then you can start the project with this command:

    npm run dev

or either this (this command will automatically starts you project after build successful):

    npx expo run:android

then follow the steps [here](https://www.geeksforgeeks.org/methods-of-generating-apk-of-android-application/) to generate the apk file.
(This process is necessary only when you are done with the final build for production)

## Migrating back to Expo Go

Okay so, basically Expo Go is the best, and you don't wanna quit it anytime so soon...
Basically to migrate back to Expo Go, simply uninstall the Dev-Client, then comment out all files and components which only run natively, which will likely tocorrupt Expo Go (Some won't show the error unless there's some critical conflicts happening, it simply won't run the native library, but just taking it as the precaution)

run this command:

    npm uninstall expo-dev-client

then, for each components using the native components (which won't work for Expo Go), comment it out like this, please do also includes all self writes components using it:

> \# import TextRecognition, { TextRecognitionResult } from "@react-native-ml-kit/text-recognition";

**_(this is an example of a native only library)_**

then, remove the node_modules and android file (!if you wish for faster android build next time, can consider keeping them).

Lastly, reinstall your node_modules file using the command:

    npm install

Now you should be able to run your project on Expo Go(by default) again:

    npx expo start
