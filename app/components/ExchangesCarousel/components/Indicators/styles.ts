import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  afterContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  beforeContainer: {
    flexDirection: 'row-reverse',
    width: '100%',
  },
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
});

export default styles;
