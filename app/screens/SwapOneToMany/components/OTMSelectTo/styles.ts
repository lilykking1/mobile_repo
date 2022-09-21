import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  absoluteButton: {
    alignSelf: 'center',
    bottom: 10,
    position: 'absolute',
    width: '100%',
    zIndex: 2,
  },
  centralTitle: {
    alignSelf: 'center',
    marginBottom: 18,
    marginTop: 13,
    textAlign: 'center',
    width: '70%',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  content: {
    paddingBottom: 40,
    paddingHorizontal: 0,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContentContainer: {
    flex: 1,
    marginTop: 31,
  },
  sectionTitle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingBottom: 16,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default styles;
