import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
  },
  content: {
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 1,
    width: '100%',
  },
  field: {
    marginBottom: 16,
  },
  footer: {
    alignContent: 'center',
    flexGrow: 0,
    flexShrink: 0,
  },
  form: {
    marginBottom: 14,
    width: '100%',
  },
  header: {
    marginBottom: 45,
  },
  icon: {
    height: 97,
    marginBottom: 28,
    width: 84,
  },
  instructions: {
    marginBottom: 40,
    opacity: 0.7,
    textAlign: 'center',
  },
  logo: {
    alignSelf: 'center',
    height: 48,
    width: 167,
  },
  qrCode: {
    backgroundColor: palette.transparent,
  },
  title: {
    marginBottom: 16,
  },
});

export default styles;
