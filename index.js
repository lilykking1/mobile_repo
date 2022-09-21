import './shim';
import './bootstrap/why-did-you-render';

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';

import App from './app/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
