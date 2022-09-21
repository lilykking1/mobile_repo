import { StyleSheet } from 'react-native';
import { getFontStyleForWeight } from '@app/utils/font';

import { EXCHANGE_CARD_WIDTH, EXCHANGE_CARD_HEIGHT } from '../constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    height: EXCHANGE_CARD_HEIGHT,
    justifyContent: 'center',
    width: EXCHANGE_CARD_WIDTH,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  label: {
    ...getFontStyleForWeight({
      fontFamily: 'VisueltPro',
      fontWeight: '500',
    }),
  },
});

export default styles;
