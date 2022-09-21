import { StyleSheet } from 'react-native';

import { palette } from '@app/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 10
  },
  contentScroll: {
    alignItems: 'center',
    padding: 20,
  },
  contentView: {
    backgroundColor: palette.whiteZircon,
    flex: 1,
    paddingTop: 20,
  },
  header: {
    flexGrow: 0,
    flexShrink: 0,
    paddingBottom: 8,
    paddingHorizontal: 20,
  },
  scroll: {
    backgroundColor: palette.whiteZircon,
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
  },
  subtitle: {
    color: palette.purpleRoyal,
    fontSize: 18,
  },
  title: {
    color: palette.white,
    fontSize: 24,
    fontWeight: '600',
    paddingBottom: 10,
    paddingTop: 20,
  },
});

export default styles;
