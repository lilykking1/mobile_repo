import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  footerContainer: {
    marginHorizontal: 11,
    marginVertical: 8,
  },
  footerContentText: {
    lineHeight: 20,
  },
  footerContentTitle: {
    marginBottom: 8,
  },
  footerItemContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
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
