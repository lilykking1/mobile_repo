import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  alertContent: {
    borderBottomColor: palette.grey[400],
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  alertDate: {
    marginTop: 6,
  },
  alertHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alertsContainer: {
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
  },
  indicator: {
    alignSelf: 'center',
  },
  lastAlertContent: {
    paddingTop: 12,
  },
});

export default styles;
