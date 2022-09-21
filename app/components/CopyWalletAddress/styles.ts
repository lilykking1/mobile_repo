import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundStyles: {
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    height: 44,
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 30,
  },
  buttonContainer: {
    borderRadius: 12,
  },
  containerHint: {
    borderRadius: 4,
    marginLeft: 12,
    paddingHorizontal: 4,
    position: 'absolute',
    top: -10,
    zIndex: 2,
  },
  hintTypographyStyle: {
    lineHeight: 20,
  },
  typographyStyle: {
    paddingRight: 16,
  },
});

export default styles;
