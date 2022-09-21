[![Build Status](https://app.bitrise.io/app/4587afe9aed1f57a/status.svg?token=Oq2RUropZ1ZhHeg9hxAiKQ&branch=develop)](https://app.bitrise.io/app/4587afe9aed1f57a)

## Quick Start

**Copy/paste .env files for staging, dev, prod in root dir based on .env.template file**
```.env.staging, .env.development, .env.staging```

install deps: ```yarn```
*ios build*: ```yarn ios```
*android build*: ```yarn android```

##### Now run in dev *remember .env files depending on environment*
```yarn start:dev --reset-cache```
##### staging
```yarn start:staging --reset-cache```
##### prod
```yarn start:prod --reset-cache```

```
stacked-mobile
├── .storybook
│   ├── views
│   ├── registry.ts
│   ├── StorybookUIRoot.ts
│   └── ToggleStorybook.tsx
├── app
│   ├── assets
│   ├── components
│   │   └── example
│   ├── i18n
│   ├── interfaces
│   ├── navigators
│   ├── redux
│   ├── screens
│   ├── theme
│   ├── utils
│   └── App.tsx
├── test
│   ├── __snapshots__
│   ├── __mocks__
│   ├── __stubs__
│   ├── i18n.test.ts
│   └── setup.ts
├── types
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── index.js
├── ios
│   ├── StackedInvest
│   ├── StackedInvest.xcodeproj
│   └── StackedInvestTests
├── .env
├── shim.js
└── package.json
```

### ./.storybook directory

This is where your stories will be registered and where the Storybook configs will live.

### ./app directory

This is a directory you would normally have to create when using vanilla React Native.

The inside of the src directory looks similar to the following:

```
app
├── assets
├── components
│   └── example
├── i18n
├── interfaces
├── navigators
├── redux
├── screens
├── theme
├── utils
└── App.tsx
```

**components**
This is where your React components will live. Each component will have a directory containing the `.tsx` file, along with a story file, and optionally `.presets`, and `.props` files for larger components. The app will come with some commonly used components like Button.

**i18n**
This is where your translations will live if you are using `react-native-i18n`.

**interfaces**

**navigators**
This is where your `react-navigation` navigators will live.

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**theme**
Here lives the theme for your application, including spacing, colors, and typography.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truely shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**App.tsx** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.

### ./test directory

This directory will hold your Jest configs and mocks.

# Storybook

From the command line in your generated app's root directory, enter `yarn run storybook`
This starts up the storybook server and opens a story navigator in your browser. With your app
running, choose Toggle Storybook from the developer menu to switch to Storybook; you can then
use the story navigator in your browser to change stories.

For Visual Studio Code users, there is a handy extension that makes it easy to load Storybook use cases into a running emulator via tapping on items in the editor sidebar. Install the `React Native Storybook` extension by `Orta`, hit `cmd + shift + P` and select "Reconnect Storybook to VSCode". Expand the STORYBOOK section in the sidebar to see all use cases for components that have `.story.tsx` files in their directories.

## Storybook Keyboard Shortcuts (Mac)

**iPhone Emulator**: `ctrl + cmd + z` brings up the menu to toggle Storybook on or off.

Note: You will sometimes need to refresh your emulator (keyboard shortcut is `r` from the emulator _or_ the terminal running Metro) to see changes. The _Knobs_ in storybook may not appear correctly as you navigate between components. After navigating to a component try refreshing your emulator and browser.

## Managing state with [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) and [mobx-react](https://github.com/mobxjs/mobx/tree/main/packages/mobx-react)

MMKV is a persistant storage solution for react-native, it'll be responsibile for maintaining encrypted auth tokens for users, settings, preferences etc. You can push state updates to MMKV via the traditional state management solution of Mobx with a persisteable method in a Mobx store like below. In this instance, the Mobx AuthStore will only hydrate the `auth` mmkv storage with the @observable isSignedIn:

```javascript
makePersistable(this, {
      name: AuthStore.name,
      properties: ['isSignedIn'],
      storage: {
        setItem: (key, data) => authStorage.set(key, data),
        getItem: (key) => authStorage.getString(key) as string | null,
        removeItem: (key) => authStorage.delete(key),
      },
    });
```

Mobx is wrapped with React Context. This allows for the traditional `useContext` hooks to be used and a single provider in the root App.tsx. Components using state need to be wrapped on export with mobx-react observer to listen to state changes and rerender appropriately, example below with context:

```javascript
import React, { useContext } from 'react';
import { RootContext } from '@app/state';
import { observer } from 'mobx-react';

const Settings: FC = () => {
    // use the root context managed by mobx and drill down to the store you want.
    const {
        authStore: { isSignedIn, signInUser, signOutUser },
    } = useContext(RootContext);

    return (
        ...component
    )
}

export default observer(Settings);
```

Mirroring Mobx state unit tests are in app/state `__test__` file.

## Amplitude Overview - [sdk](https://www.docs.developers.amplitude.com/data/sdks/react-native/)

- Depending on environment, add `AMPLITUDE_API_KEY` key in `bitrise.yml` to `.env.staging` and run `yarn starts:staging --reset-cache`
- Once events are logged in the app, find them in `User Look-up` for project: [Stacked Project Unicorn Mobile And Web](https://analytics.amplitude.com/lunar/activity)
- example usage in `app/screens/ExplainerSeries/index.tsx` using constants declared in `app/utils/amplitude/constants`
```javascript
import {
  logAmplitudeEvent,
  AMPLITUDE_LOGIN_EVENT_NAME,
  AMPLITUDE_LOGIN_PROP_VALUE,
} from '@app/utils/amplitude';

  const onNavigateTo = (route: string) => {
    setWithAutoScroll(false);
    logAmplitudeEvent(AMPLITUDE_LOGIN_EVENT_NAME, {
      location: `${AMPLITUDE_LOGIN_PROP_VALUE} ${
        currentSlideIndex + 1
      }`,
    });
    navigation.navigate('Authentication', { screen: route });
  };
```

Current directory structure:
```
stacked-mobile
├── app
│   ├── state
│       ├── __test__ (store unit tests)
│       ├── storage (mmkv storage instances)
│       ├── stores (mobx state trees)
│           ├── index.ts (stores combined here into a root store and RootContext declared)
│       ├── index.tsx
```

## Running e2e tests

Read [e2e setup instructions](./e2e/README.md).

## RN-Nodeify

Sometimes we need to use some non-react-native modules inside our projects. And that's the case that already happened in this project: we needed to use buffer, a core node module so it would be possible to use the [multicoin-address-validator](https://github.com/christsim/multicoin-address-validator), the chosen lib to validate wallet address in the project. To do that, we used the [rn-nodeify](https://github.com/tradle/rn-nodeify).

rn-nodeify installs core node modules using a configuration file called `shim.js`, which is auto-generated after running its command, and this `shim.js` file maps the selected core node modules to be used in our project.

To install the buffer module using the rn-nodeify lib is simple, we just need to add a new step in our `postinstall` command: `rn-nodeify --install buffer --hack --yarn` and the `shim.js` file will be generated. To do this step, since we already have a `postinstall` script that runs on the `postinstall` command configure in the `package.json` file, we just added a new line to this script file:

    { command:  'rn-nodeify --install buffer --hack --yarn' }

After this step, we need to import the `shim.js` file in our `index.js` file from the project's root folder: `import './shim';`. This way, our react-native project dependencies can use any core node module that we selected previously to be installed.

### Issues and Workarounds

According to the rn-nodeify docs, it should be enough but we faced an issue with an error message like this:

> Property left of AssignmentExpression expected node to be of a type
> ["LVal"] but instead got "StringLiteral"

The solution to fix this issue is to update a few lines inside `shim.js` file:

From:
`process.env['NODE_ENV'] = isDev ? 'development' : 'production'`

To:
`env = process.env ?? {}; env['NODE_ENV'] = isDev ? 'development' : 'production'; process.env = env;`

The concern about this fix was the rn-nodeify command could replace it every time it runs, but it doesn't happen. We just need to pay attention to it if we add a new core node module dependency into the project in the future.
