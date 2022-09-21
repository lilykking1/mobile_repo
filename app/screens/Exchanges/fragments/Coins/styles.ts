import { StyleSheet, Platform } from 'react-native';
import {
  TOP_POSITION_LEFT_COIN_IOS,
  TOP_POSITION_LEFT_COIN_ANDROID,
  TOP_POSITION_RIGHT_COIN_IOS,
  TOP_POSITION_RIGHT_COIN_ANDROID,
} from './constants';

const leftCoinTopPosition =
  Platform.OS === 'ios'
    ? TOP_POSITION_LEFT_COIN_IOS
    : TOP_POSITION_LEFT_COIN_ANDROID;
const rightCoinTopPosition =
  Platform.OS === 'ios'
    ? TOP_POSITION_RIGHT_COIN_IOS
    : TOP_POSITION_RIGHT_COIN_ANDROID;

const styles = StyleSheet.create({
  leftCoinImage: {
    left: -3,
    position: 'absolute',
    top: leftCoinTopPosition,
    zIndex: 3,
  },
  rightCoinImage: {
    position: 'absolute',
    right: -3,
    top: rightCoinTopPosition,
    zIndex: 3,
  },
});

export default styles;
