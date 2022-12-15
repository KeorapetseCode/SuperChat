import "dotenv/config";

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
    },
    extra: {
      apiKey: "AIzaSyD-nCeR5vi-ue1-xF_JUO7_X2OQyqPlogM",
      authDomain: "chatapp-c0a05.firebaseapp.com",
      projectId: "chatapp-c0a05",
      storageBucket: "chatapp-c0a05.appspot.com",
      messagingSenderId: "880921219217",
      appId: "1:880921219217:web:782dc797088862a0f4af30"
    }
  },
}
