import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 0,
    flexShrink: 0,
  },
  main: {
    alignItems: 'center',
    flexBasis: 10,
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
  },
  side: {
    alignItems: 'flex-end',
    flexBasis: 1,
    flexGrow: 1,
    flexShrink: 0,
    paddingHorizontal: 20,
  },
  step: {
    borderRadius: 8,
    height: 8,
    marginHorizontal: 4,
    width: 8,
  },
});

export default styles;
