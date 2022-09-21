import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    padding: 16,
  },
  detailContainer: {
    position: 'absolute',
    right: 0,
  },
  image: {
    alignSelf: 'center',
    height: 76,
    width: 85,
  },
  message: {
    lineHeight: 20,
  },
  messageContainer: {
    marginTop: 10,
    maxWidth: 220,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    lineHeight: 24,
    marginRight: 18,
  },
});

export default styles;
