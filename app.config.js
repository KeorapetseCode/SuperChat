import 'dotenv/config';

export default {
  "expo": {
    "name": "SuperChat",
    "slug": "SuperChat",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  },
  extra: {
    apiKey: "AIzaSyD44ZH1oWZ7loJl08l6Uc4ULI71NLJl3Xs",
    authDomain: "superchat-7f8cf.firebaseapp.com",
    projectId: "superchat-7f8cf",
    storageBucket: "superchat-7f8cf.appspot.com",
    messagingSenderId: "682183974118",
    appId: "1:682183974118:web:4bae316708d654eae62f27"
  }
}
