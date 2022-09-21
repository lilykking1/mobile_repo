import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';

const styles = StyleSheet.create({
  checkbox: {
    position: 'absolute',
    right: 18,
    zIndex: 9,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 0,
    marginTop: 10,
    position: 'relative',
    width: '100%',
  },
  containerBackground: {
    backgroundColor: palette.greyTitan,
  },
  hidden: {
    display: 'none',
  },
  iconLabelContainer: {
    alignItems: 'center',
  },
  label: {
    justifyContent: 'flex-end',
  },
});

export default styles;
