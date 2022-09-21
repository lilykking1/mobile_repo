import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 1,
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
  icon: {
    height: 97,
    marginBottom: 28,
    width: 84,
  },
  instructions: {
    marginBottom: 32,
    opacity: 0.7,
    textAlign: 'center',
  },
  logo: {
    height: 48,
    width: 167,
  },
  subContent: {
    alignItems: 'center',
    paddingHorizontal: 40,
    width: '100%',
  },
  title: {
    marginBottom: 16,
  },
});

export default styles;
