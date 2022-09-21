import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  codeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 67,
    paddingBottom: 48,
    paddingHorizontal: 56,
    paddingTop: 25,
    width: '100%',
  },
  codeInstructions: {
    marginBottom: 24,
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 1,
    width: '100%',
  },
  divider: {
    backgroundColor: palette.grey[500],
    height: 1,
    marginBottom: 28,
    marginTop: 10,
    width: '100%',
  },
  footer: {
    alignContent: 'center',
    flexGrow: 0,
    flexShrink: 0,
    paddingHorizontal: 40,
  },
  form: {
    width: '100%',
  },
  header: {
    marginBottom: 45,
    width: '100%',
  },
  qrContainer: {
    borderColor: palette.grey[300],
    borderRadius: 4,
    borderWidth: 1,
    padding: 8,
  },
  qrInput: {
    marginBottom: 48,
    width: '100%',
  },
  qrInstructions: {
    marginBottom: 24,
    textAlign: 'center',
  },
  subContent: {
    alignItems: 'center',
    paddingHorizontal: 40,
    width: '100%',
  },
  title: {
    marginBottom: 18,
  },
});

export default styles;
