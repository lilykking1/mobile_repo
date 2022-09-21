import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 36,
    width: 36,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    width: '100%',
  },
  spaceContainer: {
    flex: 1,
  },
  text: {
    lineHeight: 24,
    textAlign: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
  },
});

export default styles;
