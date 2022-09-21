import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  footerContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    marginHorizontal: 11,
    marginTop: 12,
  },
  footerContentText: {
    lineHeight: 20,
  },
  footerContentTitle: {
    marginBottom: 8,
  },
  infoContainer: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center',
    marginLeft: 13,
    textAlign: 'right',
  },
});

export default styles;
