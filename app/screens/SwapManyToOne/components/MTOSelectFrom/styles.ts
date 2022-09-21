import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  absoluteButton: {
    alignSelf: 'center',
    bottom: 10,
    position: 'absolute',
    width: '100%',
    zIndex: 2,
  },
  centralTitle: {
    alignSelf: 'center',
    marginBottom: 18,
    marginTop: 13,
    textAlign: 'center',
    width: '70%',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  content: {
    paddingBottom: 40,
    paddingHorizontal: 0,
  },
  listItems: {
    marginTop: 30,
  },
});

export default styles;
