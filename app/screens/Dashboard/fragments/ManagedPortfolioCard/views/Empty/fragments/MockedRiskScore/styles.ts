import { StyleSheet } from 'react-native';

const COLOR = '#444543';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: COLOR,
    borderRadius: 0,
    borderWidth: 1,
    paddingHorizontal: 4,
    paddingTop: 2,
  },
  number: {
    color: COLOR,
  },
  title: {
    color: COLOR,
    textTransform: 'uppercase',
  },
});

export default styles;
