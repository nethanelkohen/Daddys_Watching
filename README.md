[![GitHub top language](https://img.shields.io/github/languages/top/nethanelkohen/ByeBye.svg?colorB=EFDF70&style=plastic)](https://github.com/nethanelkohen/ByeBye)
[![GitHub issues](https://img.shields.io/github/issues/nethanelkohen/ByeBye.svg?&colorB=ff0000&style=plastic)](https://github.com/nethanelkohen/ByeBye/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/nethanelkohen/ByeBye.svg?colorB=1FBF14&style=plastic)](https://github.com/nethanelkohen/ByeBye/pulls)
[![License (3-Clause BSD)](https://img.shields.io/github/license/mashape/apistatus.svg?style=plastic)](https://github.com/nethanelkohen/ByeBye/blob/master/LICENSE)

<img src="./assets/images/bye.png" width="150" height="150" align="right">

# ByeBye

 <br>

### _Give Your Sober Friends Peace of Mind_

A iOS application created by [Nethanel Kohen](https://github.com/nethanelkohen) and [Martin Pham](https://github.com/martinliempham) that lets your friends know you've made it home after a night out

<br>

<img src="./assets/video/ByeBye_demo.gif" width="500" height="auto" />

<br>

## Getting Started

**This App will only run on iOS.**

Download the [Expo Client for iOS](https://itunes.apple.com/app/apple-store/id982107779?ct=www&mt=8).

Then, scan the QR code below:

<img src="./assets/images/qr_code.png" align= "center" width="150" height="auto" />

or go to our [project](https://expo.io/@nethanelkohen/ByeBye) on Expo.

On the home screen, type in your desired message in the text input and choose a friend from your contacts list. Press the save icon to save your message and the contact you will send that message to and navigate to the map screen to search for a location. When you are ready to go home or leave for the night, click the bullseye to begin tracking your location! Once you are within 50 meters of your endpoint, your friend will receive your message from a Twilio number ((210)-508-0050). If you'd like to cancel your message, simply click the X to turn everything off.

## Project Structure

```
│   ├── App.js         ## Begins navigation
│   ├──app.json        ## Handles Expo render data
│   ├── assets         ## Static assets
│   │   └── images     ### Images (png)
│   ├── components     ## Any shared components
│   │   └── ContactsComponent.js     ### Renders user contact and saves to storage
│   │   └── Map.js     ### Renders map, location tracking and makes Twilio API call
│   │   └── TextMessage.js     ### Renders user message and saves to storage
│   └── screens        ### Any shared components
│       └── HomeScreen.js     ### Navigates to contact/message screen
│       └── MapScreen.js      ### Navigates to map
│
└── ByeBye Server # Handles Twilio post API call
```

## What's Inside

<img src="./assets/images/react-native.png" align= "center" width="150" height="auto" />

[React-Native](https://facebook.github.io/react-native/)

<img src="./assets/images/expo.png" align= "center" width="150" height="auto" />

[Expo](https://expo.io/)

<img src="./assets/images/twilio.png" align= "center" width="150" height="auto" />

[Twilio](https://www.twilio.com/)

<br>

## Contribute

Add to our project! Please read the [contribution guidelines](CONTRIBUTING.md) first.

# Inspiration

* [Nathan for You](https://www.youtube.com/watch?v=xMW-SzZKJ-Q) - Name/concept
* [Find My Friends](https://itunes.apple.com/us/app/find-my-friends/id466122094?mt=8) - Tracking/sharing location features

## Acknowledgements

This app was built using [Create-React-Native-App](https://github.com/react-community/create-react-native-app). Big shout-out to the [Expo](https://github.com/expo) team for all the work they do.

## License

This React-Native app is under the [MIT License](https://github.com/nethanelkohen/ByeBye/blob/master/LICENSE).
