import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottom: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  candleStickBarChart: {
    width: '100%',
  },
  middle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  riskAvgCard: {
    alignItems: 'center',
    backgroundColor: palette.white,
    borderRadius: 10,
    boxShadow: '0px 6px 15px rgba(16, 16, 118, 0.1)',
    height: 64,
    justifyContent: 'center',
    width: 80,
  },
  top: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
