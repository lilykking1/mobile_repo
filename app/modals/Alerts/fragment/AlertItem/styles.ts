import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  alertContent: {
    paddingTop: 12,
  },
  alertDate: {
    marginTop: 6,
  },
  alertHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alertsContainer: {
    backgroundColor: palette.grey[300],
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
  },
  divider: {
    marginTop: 12,
  },
  indicator: {
    alignSelf: 'center',
  },
  lastAlertContent: {
    paddingTop: 12,
  },
});

export default styles;
