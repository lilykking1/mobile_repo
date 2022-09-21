import { StyleSheet } from 'react-native';
import { BORDER_COLOR } from './constants';

const styles = StyleSheet.create({
  accrualCard: {
    flex: 0,
    paddingHorizontal: 9,
    paddingVertical: 10,
  },
  bottomSpace: {
    marginBottom: 8,
  },
  container: {
    borderRadius: 16,
    height: 175,
    marginBottom: 25,
    width: '100%',
  },
  content: {
    borderColor: BORDER_COLOR,
    borderRadius: 16,
    borderWidth: 1,
    flex: 1,
    height: '100%',
    paddingTop: 20,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default styles;
