# Link2Cart - React Native Expo App

A React Native mobile application built with Expo.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo Go app on your mobile device ([iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the App

Start the development server:
```bash
npm start
```

This will open Expo DevTools in your browser. You can then:

- **Scan the QR code** with your phone camera (iOS) or Expo Go app (Android)
- Press **`a`** to open in Android emulator
- Press **`i`** to open in iOS simulator
- Press **`w`** to open in web browser

## Project Structure

```
link2cart/
├── assets/              # Images, fonts, and other static assets
├── src/
│   ├── components/      # Reusable components
│   ├── screens/         # Screen components
│   ├── navigation/      # Navigation configuration
│   ├── services/        # API services
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
├── App.js              # Main app entry point
├── app.json            # Expo configuration
├── package.json        # Dependencies
└── babel.config.js     # Babel configuration
```

## Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Open on Android device/emulator
- `npm run ios` - Open on iOS simulator
- `npm run web` - Open in web browser

## Next Steps

You can now start building your app! The boilerplate includes:
- ✅ Expo setup
- ✅ React Navigation
- ✅ Basic screen structure
- ✅ Example components

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
