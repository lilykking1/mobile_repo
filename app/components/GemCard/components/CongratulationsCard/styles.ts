import { StyleSheet } from 'react-native';

import { palette } from '@app/theme';

export const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    backgroundColor: palette.transparent,
    flexDirection: 'row',
    marginLeft: '15%',
    marginTop: 25,

    width: '100%',
  },
  headerTitle: {
    marginBottom: 4,
  },
  portfolioText: {
    lineHeight: 15.3,
    paddingRight: 170,
  },
  successImage: {
    height: 70,
    marginTop: -7,
    width: 70,
  },
  textsContainer: {
    marginHorizontal: 22,
  },
});
