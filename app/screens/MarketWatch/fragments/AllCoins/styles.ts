import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  allRow: { flexDirection: 'row', justifyContent: 'space-between' },
  column: {
    paddingHorizontal: 16,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  loading: {
    paddingVertical: 30,
    textAlign: 'center',
  },
});

export default styles;
